import * as React from "react"
import {
    Activity,
    CommentField,
    CommentList,
    FlatFeed,
    InfiniteScrollPaginator,
    LikeButton,
    NotificationDropdown,
    StatusUpdateForm,
    StreamApp
} from "react-activity-feed"
import "../../../../../node_modules/react-activity-feed/dist/index.css"
import {IUser} from "../_general.interfaces/IUser"
import {GS_APP_ID, GS_KEY} from "./Newsfeed.constants"


class Newsfeed extends React.Component<IUser, any> {

    public render() {
        console.log(JSON.stringify(this.props))

        return <StreamApp
            apiKey={GS_KEY}
            appId={GS_APP_ID}
            token={this.props.userToken}>

            <NotificationDropdown notify/>
            <StatusUpdateForm
                feedGroup="timeline"
                userId={this.props.userName}/>
            <FlatFeed
                options={{reactions: {recent: true}}}
                Paginator={InfiniteScrollPaginator}
                notify
                Activity={(props: any) =>
                    <Activity {...props}
                              Footer={() => (
                                  <div style={{padding: '8px 16px'}}>
                                      <LikeButton {...props} />
                                      <CommentField
                                          activity={props.activity}
                                          onAddReaction={props.onAddReaction}/>
                                      <CommentList activityId={props.activity.id}/>
                                  </div>
                              )}
                    />
                }
            />
        </StreamApp>
    }

}

export default Newsfeed