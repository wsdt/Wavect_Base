import * as React from "react"
import { API_URL } from "./App.constants"

export class PostCreator extends React.Component<any, any> {
  public state = { title: "", descr: "" }

  public render() {
    return (
      <form
        className="postCreationForm"
        method="post"
        encType="application/json"
        action="#"
        onSubmit={this.sendToApi}
      >
        <span className="postCreationGroup">
          <label htmlFor="nPostTitle">Title</label>
          <input
            type="text"
            id="nPostTitle"
            name="nPostTitle"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </span>

        <span className="postCreationGroup">
          <label htmlFor="nPostDescr">Description</label>
          <textarea
            id="nPostDescr"
            name="nPostDescr"
            onChange={this.handleChangeDescr}
            value={this.state.descr}
          />
        </span>

        <input type="submit" value="Post now" id="postCreationSubmit" />
      </form>
    )
  }

  private handleChangeTitle = (e: any) => {
    this.setState({ title: e.target.value })
  }

  private handleChangeDescr = (e: any) => {
    this.setState({ descr: e.target.value })
  }

  private sendToApi = async (e: any) => {
    e.preventDefault() // prevent form to refresh page

    const rawResp = await fetch(`${API_URL}/newsfeed`, {
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST"
    })

    const content = await rawResp.json()

    console.log("sendToApi: Response is -> " + JSON.stringify(content))
  }
}
