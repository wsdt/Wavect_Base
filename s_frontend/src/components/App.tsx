import * as React from "react"

const LAZY_NEWS_FEED = React.lazy(() => import("./NewsFeed"))

// <any, any> to set constraints we can set interfaces for props, states
export class App extends React.Component<IProps, any> {
  public render() {
    return (
      <React.Fragment>
        <h1>Hello Be-Kind Team</h1>
        <React.Suspense fallback={<div>Loading newsfeed ...</div>}>
          <LAZY_NEWS_FEED userId="12e7-7d7s-jfjk-6e6d-8d8d-9999-0akEq" />
        </React.Suspense>
      </React.Fragment>
    )
  }
}

interface IProps {
  name: string
}
