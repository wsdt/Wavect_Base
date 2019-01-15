import * as React from "react"
import { Http2SSEclient } from "../Http2SSEclient"
import { API_URL } from "./App.constants"
import { IPropsPost } from "./Post"
import { PostCreator } from "./PostCreator"

const LAZY_POST = React.lazy(() => import("./Post"))

export class NewsFeed extends React.Component<IPropsNewsfeed, IStateNewsfeed> {
  public state: IStateNewsfeed = { posts: [] }
  public http2SSEclient: Http2SSEclient = new Http2SSEclient(
    `newsfeed/${this.props.userId}`
  )

  constructor(props: IPropsNewsfeed) {
    super(props)
    this.getCurrNewsfeed()
  }

  public componentDidMount(): void {
    this.http2SSEclient.getSSE_SOURCE().addEventListener("new_post", ((
      e: any
    ) => {
      const newState = this.state.posts
      newState.push(JSON.parse(e.data))
      this.setState({ posts: newState })
    }) as EventListener)
  }

  public render() {
    const newsFeedJsx = []
    const posts = this.state.posts
    console.log(posts)

    // Add also creation jsx
    newsFeedJsx.push(<PostCreator />)

    if (posts.length > 0) {
      for (const post of posts) {
        const postKey = post.title + post.uploadDatetime
        newsFeedJsx.push(
          <React.Suspense fallback={<div>Loading ...</div>} key={postKey}>
            <LAZY_POST
              key={postKey}
              userName={post.userName}
              title={post.title}
              descr={post.descr}
              mediaType={post.mediaType}
              mediaUrl={post.mediaUrl}
              uploadDatetime={post.uploadDatetime}
            />
          </React.Suspense>
        )
      }
    } else {
      newsFeedJsx.push(
        <p key="no_posts_available">
          You have no posts or data is being fetched.
        </p>
      )
    }

    return newsFeedJsx
  }

  private getCurrNewsfeed = async () => {
    // get newsfeed from rest api via userId prop and save into state with setState
    fetch(`${API_URL}/newsfeed/${this.props.userId}`)
      .then(res => res.json())
      .then(resJson => {
        this.setState({ posts: resJson })
      })
      .catch(err => {
        console.error("getCurrNewsFeed: Fetch failed -> " + err)
      })
  }
}

interface IStateNewsfeed {
  posts: IPropsPost[]
}

interface IPropsNewsfeed {
  userId: string
}

export default NewsFeed
