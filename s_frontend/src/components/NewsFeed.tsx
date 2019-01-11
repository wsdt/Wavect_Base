import * as React from "react"
import {IProps_Post} from "./Post"
import {Http2SSEclient} from "../Http2SSEclient"
import {API_URL} from "./App.constants";


const LazyPost = React.lazy(() => import('./Post'));


export class NewsFeed extends React.Component<IProps_Newsfeed,IState_Newsfeed> {
    state:IState_Newsfeed = {posts:[]};
    http2SSEclient:Http2SSEclient = new Http2SSEclient(`newsfeed/${this.props.userId}`);

    constructor(props:IProps_Newsfeed) {
        super(props);
        this.getCurrNewsfeed()
    }

    componentDidMount(): void {
        this.http2SSEclient.getSSE_SOURCE().addEventListener("new_post", ((e:any) => {
            let newState = this.state.posts;
                newState.push(JSON.parse(e.data));
            this.setState({posts:newState})
        }) as EventListener
        );
    }

    private getCurrNewsfeed = async() => {
        // get newsfeed from rest api via userId prop and save into state with setState
        fetch(`${API_URL}/newsfeed/${this.props.userId}`)
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({posts:resJson})
            }).catch((err) => {
            console.error("getCurrNewsFeed: Fetch failed -> " + err);
        });
    };


    public render() {
        let newsFeedJsx = [];
        let posts = this.state.posts;
        console.log(posts);

        if (posts.length > 0) {
            for (let post of posts) {
                const postKey = post.title + post.upload_datetime;
                newsFeedJsx.push(<React.Suspense fallback={<div>Loading ...</div>} key={postKey}>
                    <LazyPost key={postKey} title={post.title} descr={post.descr} media_type={post.media_type}
                              media_url={post.media_url} upload_datetime={post.upload_datetime}/>
                </React.Suspense>)
            }
        } else {
            newsFeedJsx.push(<p key="no_posts_available">You have no posts or data is being fetched.</p>)
        }

        return newsFeedJsx
    }
}

interface IState_Newsfeed {
        posts:IProps_Post[]
}

interface IProps_Newsfeed {
    userId:string
}

export default NewsFeed