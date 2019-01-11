import * as React from "react"
import "../scss/newsfeed.scss"

export class Post extends React.Component<IProps_Post, any> {
    public render() {
        let mediaJsx = <span className="errorMsg">Media couldn't be loaded.</span>;
        switch(this.props.media_type) {
            case "p":
                mediaJsx = <img src={this.props.media_url} alt="post_pic" />;
                break;
            case "v":
                mediaJsx = <video width="100" height="100" controls>
                    <source src={this.props.media_url} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>;
                break;
        }

        return <div className="post_container">
                <span className="post_uploaddatetime">{this.props.upload_datetime}</span>
                <span className="post_title">{this.props.title}</span>
                <span className="post_descr">{this.props.descr}</span>
                <div className="post_media">{mediaJsx}</div>
            </div>
    }
}


export interface IProps_Post {
    upload_datetime:string,
    title:string,
    descr:string,
    media_type:string,
    media_url:string
}

export default Post