/** User class */
import {Post} from "./Post"

export class User {

  get id(): string {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }
  get forename(): string {
    return this._forename
  }

  set forename(value: string) {
    this._forename = value
  }
  get surname(): string {
    return this._surname
  }

  set surname(value: string) {
    this._surname = value
  }
  get following(): User[] {
    return this._following
  }

  set following(value: User[]) {
    this._following = value
  }

  get profilePicPath(): string {
    return this._profilePicPath
  }

  set profilePicPath(value: string) {
    this._profilePicPath = value
  }
  public static getUserById(id: string) {
    return new User(id, "Max", "Mustermann", "#", [
        new User("blaUser", "Katharina", "Summer", "#", [])
    ])
  }

  private _id: string // username
  private _forename: string
  private _surname: string
  private _profilePicPath: string
  private _following: User[]

  constructor(
    id: string,
    forename: string,
    surname: string,
    profilePicPath: string,
    following: User[]
  ) {
    this._id = id
    this._forename = forename
    this._surname = surname
    this._profilePicPath = profilePicPath
    this._following = following
  }

  public getPosts() {
    return [
        new Post("First post", "first descr", (new Date()).toDateString(), "p", "#", this),
        new Post("Sec post", "descr", (new Date()).toISOString(), "p", "#", this),
        new Post("Third post", "description", (new Date()).toLocaleString(), "p", "#", this)
    ]
  }

  public getPostsByFollowings() {
    const posts = []
    for (const user of this.following) {
      for (const post of user.getPosts()) {
        posts.push(post)
      }
    }
    return posts
  }
}
