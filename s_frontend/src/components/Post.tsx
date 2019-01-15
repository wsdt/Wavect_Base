import * as React from "react"
import "../scss/newsfeed.scss"

export class Post extends React.Component<IPropsPost, any> {
  public render() {
    let mediaJsx = <span className="errorMsg">Media couldn't be loaded.</span>
    switch (this.props.mediaType) {
      case "p":
        mediaJsx = <img src={this.props.mediaUrl} alt="post_pic" />
        break
      case "v":
        mediaJsx = (
          <video width="100" height="100" controls={true}>
            <source src={this.props.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
        break
    }

    return (
      <div className="post_container">
        <span className="post_uploaddatetime">{this.props.uploadDatetime}</span>
        <span className="post_title">
          {this.props.userId}: {this.props.title}
        </span>
        <span className="post_descr">{this.props.descr}</span>
        <div className="post_media">{mediaJsx}</div>
      </div>
    )
  }
}

export interface IPropsPost {
  userId: string
  uploadDatetime: string
  title: string
  descr: string
  mediaType: string
  mediaUrl: string
}

export default Post
