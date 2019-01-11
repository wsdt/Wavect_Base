export class Post {
  public uploadDatetime: string
  public title: string
  public descr: string
  public mediaType: string
  public mediaUrl: string
  // likedBy
  // comments etc.

  constructor(
    title: string,
    descr: string,
    uploadDatetime: string,
    mediaType: string,
    mediaUrl: string
  ) {
    this.title = title
    this.descr = descr
    this.uploadDatetime = uploadDatetime
    this.mediaType = mediaType
    this.mediaUrl = mediaUrl
  }
}
