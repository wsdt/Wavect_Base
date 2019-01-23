import * as React from "react"
import { getRandomStr } from "../helper/StringFunctions"
import { PostCreator } from "./PostCreator"

const LAZY_NEWS_FEED = React.lazy(() => import("./NewsFeed"))

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {
  public state = {userId:getRandomStr()}

  public render() {
    return (
      <React.Fragment>
          <p>Change userId:
          <input type="text" onChange={this.handleUserId} value={this.state.userId} />
          </p>

        <h1>Hello Be-Kind Team</h1>
        <PostCreator userId={this.state.userId} />
        <React.Suspense fallback={<div>Loading newsfeed ...</div>}>
          <LAZY_NEWS_FEED userId={this.state.userId} key={this.state.userId} />
        </React.Suspense>
      </React.Fragment>
    )
  }

  private handleUserId = (e:any) => {
      this.setState({userId: e.target.value})
  }
}
