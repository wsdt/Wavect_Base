"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SSEvent = (function () {
    function SSEvent(event, id, data) {
        this.event = event;
        this.id = id;
        this.data = data;
    }
    SSEvent.prototype.toString = function () {
        return "event: new_post\n" + ("id: " + this.id + "\n") + ("data: " + this.data + "\n\n");
    };
    return SSEvent;
}());
exports.SSEvent = SSEvent;
//# sourceMappingURL=SSEvent.js.map