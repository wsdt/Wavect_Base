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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxrZXZpblxcRGVza3RvcFxcQmVLaW5kXFxUaHJvd0F3YXlQcm90b3R5cGVzXFxCZUtpbmRfUGxheWdyb3VuZFxcc19iYWNrZW5kXFxzX2JfY29yZVxcc3JjXFxhcHAudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMEM7QUFDMUMsaUNBQW1DO0FBQ25DLDJCQUE2QjtBQUM3Qiw4QkFBZ0M7QUFFaEMsZ0NBQWdDO0FBQ2hDLDJHQUEyRztBQUUzRztJQVFFO1FBTk8sV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QixPQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQU0xQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBUEQsc0JBQWtCLFdBQUk7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQywwQkFBMEI7Ozs7T0FBM0I7SUFPTSx1QkFBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLE1BQWlCO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxvQkFBTSxHQUFkO1FBQ0Usa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0gsVUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFFRCxrQkFBZSxJQUFJLEdBQUcsRUFBRSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2V2aW5cXERlc2t0b3BcXEJlS2luZFxcVGhyb3dBd2F5UHJvdG90eXBlc1xcQmVLaW5kX1BsYXlncm91bmRcXHNfYmFja2VuZFxcc19iX2NvcmVcXHNyY1xcYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvXCI7XHJcblxyXG4vKiogQWRkIG1vcmUgcGFyYW1zIHRvIHNvY2tldCAqL1xyXG4vLyBpbnRlcmZhY2UgSUV4dGVuZGVkU29ja2V0IGV4dGVuZHMgaW8uU29ja2V0IHt9IC8vIHdoZW4gdW5jb21tZW50ZWQgY2hhbmdlIGlvLlNvY2tldCB3aXRoIElFeHRlbmRlZFNvY2tldFxyXG5cclxuY2xhc3MgQXBwIHtcclxuICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xyXG4gIHB1YmxpYyBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigpO1xyXG4gIHB1YmxpYyBpbyA9IGlvKHRoaXMuc2VydmVyKTtcclxuICBwdWJsaWMgc3RhdGljIGdldCBQT1JUKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gODA5MDtcclxuICB9IC8vIGdldHRlciB0byBtYWtlIGl0IGNvbnN0XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XHJcbiAgICB0aGlzLmNvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJ1blNlcnZlcigpIHtcclxuICAgIHRoaXMuaW8ub24oXCJjb25uZWN0aW9uXCIsIChjbGllbnQ6IGlvLlNvY2tldCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyBjbGllbnQgY29ubmVjdGVkOiBcIiArIGNsaWVudC5pZCk7XHJcblxyXG4gICAgICBjbGllbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudCBkaXNjb25uZWN0ZWQ6IFwiICsgY2xpZW50LmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlvLmxpc3RlbihBcHAuUE9SVCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFwcDpydW5TZXJ2ZXI6IExpc3RlbmluZyBvbiBwb3J0OiBcIiArIEFwcC5QT1JUKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnKCk6IHZvaWQge1xyXG4gICAgLy8gc3VwcG9ydCBhcHBsaWNhdGlvbi9qc29uIHR5cGUgcG9zdCBkYXRhIChtaWdodCBiZSBuZWVkZWQgbGF0ZXIpXHJcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5cclxuICAgIC8vIHN1cHBvcnQgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIHBvc3QgZGF0YVxyXG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCk7XHJcbiJdLCJ2ZXJzaW9uIjozfQ==