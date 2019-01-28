import * as React from "react"
import {Activity, CommentField, CommentList, FlatFeed, InfiniteScrollPaginator, LikeButton, NotificationDropdown,StatusUpdateForm, StreamApp} from "react-activity-feed"
import "../../../node_modules/react-activity-feed/dist/index.css"
// Typings missing (reported to getstream, made issue) -> same here: import * as stream from "getstream"
import {GS_APP_ID, GS_KEY} from "./Newsfeed.constants"
import {INewsfeedProps} from "./Newsfeed.interfaces"


export class Newsfeed extends React.Component<INewsfeedProps, any> {
    public render() {
        return <StreamApp
            apiKey={GS_KEY}
            appId={GS_APP_ID}
            token={this.props.userToken}>
            
            <NotificationDropdown notify />
            <StatusUpdateForm
                feedGroup="timeline"
                userId={this.props.userId} />
            <FlatFeed
                options={{reactions: { recent: true } }}
                Paginator={InfiniteScrollPaginator}
                notify
                Activity={(props:any) =>
                    <Activity {...props}
                              Footer={() => (
                                  <div style={ {padding: '8px 16px'} }>
                                      <LikeButton {...props} />
                                      <CommentField
                                          activity={props.activity}
                                          onAddReaction={props.onAddReaction} />
                                      <CommentList activityId={props.activity.id} />
                                  </div>
                              )}
                    />
                }
            />
        </StreamApp>
    }
}
