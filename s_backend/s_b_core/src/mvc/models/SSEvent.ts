import { Response } from "express"

export class SSEvent {
    public event: string
    public id: string
    public data: string

    constructor(event: string, id: string, data: string) {
        this.event = event
        this.id = id
        this.data = data
    }

    public sendSSEvent(res: Response) {
        res.write(this.toString())
    }

    public toString() {
        return "event: new_post\n" + `id: ${this.id}\n` + `data: ${this.data}\n\n`
    }
}
