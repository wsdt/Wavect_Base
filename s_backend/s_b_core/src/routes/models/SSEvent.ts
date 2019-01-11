export class SSEvent {
    event:string;
    id:string;
    data:string;

    constructor(event:string, id:string, data:string) {
        this.event = event;
        this.id = id;
        this.data = data;
    }

    public toString() {
        return "event: new_post\n"+
            `id: ${this.id}\n`+
            `data: ${this.data}\n\n`;
    }

}