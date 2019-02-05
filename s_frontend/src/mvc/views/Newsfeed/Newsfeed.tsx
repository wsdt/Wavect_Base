import * as React from "react"
import {Activity, CommentField, CommentList, FlatFeed, InfiniteScrollPaginator, LikeButton, NotificationDropdown,StatusUpdateForm, StreamApp} from "react-activity-feed"
import "../../../../node_modules/react-activity-feed/dist/index.css"
import {COOKIES} from "../App/App"
import {API_URL} from "../App/App.constants"
import {INewsfeedState} from "./INewsfeedState"
import {GS_APP_ID, GS_KEY} from "./Newsfeed.constants"


class Newsfeed extends React.Component<any, INewsfeedState> {
    
    /*public static mapStateToProps = (state:any, ownProps:any) => {
        return {ownProps, userName:state.userName}
    }*/
    public state:INewsfeedState = {userToken:""}

    public componentDidMount(): void {
        this.queryUserToken()
    }

    public render() {
        if (!this.state.userToken) {
            return <p>Loading newsfeed ...</p>
        } else {
            return <StreamApp
                apiKey={GS_KEY}
                appId={GS_APP_ID}
                token={this.state.userToken}>

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

    private queryUserToken() {
        fetch(`${API_URL}/auth/${COOKIES.get("AUTH")}`)
            .then(res => res.json())
            .then(data => {
                this.setState({userToken: data.token})
            })
            .catch(err => {
                console.error("App:connectToGetStream: Could not connect to getStream!", err)
            })
    }
}

export default Newsfeed