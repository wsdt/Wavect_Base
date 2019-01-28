import { SSE_URL } from "./components/App/App.constants"

/** Initializes server sent events on client side */

export class Http2SSEclient {
  /**
   * Declare event source (where to receive server sent events)
   * EventSource exported to add new event Listeners: e.g.:
   *
   *      SSE_SOURCE.addEventListener('eventType', (e) => {});
   *
   * Made as class constant.
   */
  private SSE_SOURCE: EventSource

  /**
   * @param sseChannel: As we use SSE_URL for referencing the backend-sse-service (e.g.: localhost/sse/v1)
   * we also want to subscribe to a specific channel (e.g. newsfeed) for receiving related events.
   */
  constructor(sseChannel: string) {
    this.SSE_SOURCE = new EventSource(`${SSE_URL}/${sseChannel}`)
    this.addDefaultEventHandlers()
  }
  public getSSE_SOURCE() {
    return this.SSE_SOURCE
  }

  /** Used to set default handlers (should only be executed by index-File once). */
  private addDefaultEventHandlers() {
    // On connection error show msg
    this.SSE_SOURCE.onerror = e => {
      console.error(
        "Http2SSEClient: Could not establish connection with backend.\n" +
          JSON.stringify(e)
      )
    }

    this.SSE_SOURCE.onopen = e => {
      console.log(
        "Http2SSEClient: ServerSent-Events connection established: " +
          JSON.stringify(e)
      )
    }

    this.SSE_SOURCE.onmessage = e => {
      console.log("Http2SSEClient: SSE-Data received -> " + e.data)
    }
  }

  // TODO: SSE_SOURCE.close() when we do not want to receive any events anymore (but server should stop sending then)
}
