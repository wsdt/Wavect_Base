import * as React from "react"
import {getRandomStr} from "../helper/StringFunctions"
import {PostCreator} from "./PostCreator";

const LAZY_NEWS_FEED = React.lazy(() => import("./NewsFeed"))

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<any, any> {
  public render() {
    const userId = getRandomStr()
    return (
      <React.Fragment>
        <h1>Hello Be-Kind Team</h1>
        <PostCreator userId={userId}/>
        <React.Suspense fallback={<div>Loading newsfeed ...</div>}>
          <LAZY_NEWS_FEED userId={userId} />
        </React.Suspense>
      </React.Fragment>
    )
  }
}
