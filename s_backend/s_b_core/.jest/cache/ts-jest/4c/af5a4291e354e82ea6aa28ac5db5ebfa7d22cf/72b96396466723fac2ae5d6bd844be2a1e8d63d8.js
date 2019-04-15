"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var http = require("http");
var io = require("socket.io");
/** Add more params to socket */
// interface IExtendedSocket extends io.Socket {} // when uncommented change io.Socket with IExtendedSocket
var App = /** @class */ (function () {
    function App() {
        this.server = http.createServer();
        this.io = io(this.http2Server);
        this.app = express();
        this.config();
    }
    Object.defineProperty(App, "PORT", {
        get: function () {
            return 8090;
        } // getter to make it const
        ,
        enumerable: true,
        configurable: true
    });
    App.prototype.runServer = function () {
        this.io.on("connection", function (client) {
            console.log("New client connected: " + client.id);
            client.on("disconnect", function () {
                console.log("Client disconnected: " + client.id);
            });
        });
        this.io.listen(App.PORT);
        console.log("App:runServer: Listening on port: " + App.PORT);
    };
    App.prototype.config = function () {
        // support application/json type post data (might be needed later)
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxrZXZpblxcRGVza3RvcFxcQmVLaW5kXFxUaHJvd0F3YXlQcm90b3R5cGVzXFxCZUtpbmRfUGxheWdyb3VuZFxcc19iYWNrZW5kXFxzX2JfY29yZVxcc3JjXFxhcHAudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBeUM7QUFDekMsaUNBQWtDO0FBQ2xDLDJCQUE0QjtBQUM1Qiw4QkFBK0I7QUFFL0IsZ0NBQWdDO0FBQ2hDLDJHQUEyRztBQUUzRztJQVFFO1FBTk8sV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUM1QixPQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQU16QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFQRCxzQkFBa0IsV0FBSTthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLDBCQUEwQjs7OztPQUEzQjtJQU9NLHVCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsTUFBaUI7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFakQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVPLG9CQUFNLEdBQWQ7UUFDRSxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFFL0Isc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQUVELGtCQUFlLElBQUksR0FBRyxFQUFFLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxrZXZpblxcRGVza3RvcFxcQmVLaW5kXFxUaHJvd0F3YXlQcm90b3R5cGVzXFxCZUtpbmRfUGxheWdyb3VuZFxcc19iYWNrZW5kXFxzX2JfY29yZVxcc3JjXFxhcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiXHJcbmltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW9cIlxyXG5cclxuLyoqIEFkZCBtb3JlIHBhcmFtcyB0byBzb2NrZXQgKi9cclxuLy8gaW50ZXJmYWNlIElFeHRlbmRlZFNvY2tldCBleHRlbmRzIGlvLlNvY2tldCB7fSAvLyB3aGVuIHVuY29tbWVudGVkIGNoYW5nZSBpby5Tb2NrZXQgd2l0aCBJRXh0ZW5kZWRTb2NrZXRcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvblxyXG4gIHB1YmxpYyBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigpXHJcbiAgcHVibGljIGlvID0gaW8odGhpcy5zZXJ2ZXIpXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgUE9SVCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDgwOTBcclxuICB9IC8vIGdldHRlciB0byBtYWtlIGl0IGNvbnN0XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKClcclxuICAgIHRoaXMuY29uZmlnKClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBydW5TZXJ2ZXIoKSB7XHJcbiAgICB0aGlzLmlvLm9uKFwiY29ubmVjdGlvblwiLCAoY2xpZW50OiBpby5Tb2NrZXQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJOZXcgY2xpZW50IGNvbm5lY3RlZDogXCIgKyBjbGllbnQuaWQpXHJcblxyXG4gICAgICBjbGllbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudCBkaXNjb25uZWN0ZWQ6IFwiICsgY2xpZW50LmlkKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmlvLmxpc3RlbihBcHAuUE9SVClcclxuICAgIGNvbnNvbGUubG9nKFwiQXBwOnJ1blNlcnZlcjogTGlzdGVuaW5nIG9uIHBvcnQ6IFwiICsgQXBwLlBPUlQpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZygpOiB2b2lkIHtcclxuICAgIC8vIHN1cHBvcnQgYXBwbGljYXRpb24vanNvbiB0eXBlIHBvc3QgZGF0YSAobWlnaHQgYmUgbmVlZGVkIGxhdGVyKVxyXG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG5cclxuICAgIC8vIHN1cHBvcnQgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIHBvc3QgZGF0YVxyXG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKVxyXG4iXSwidmVyc2lvbiI6M30=