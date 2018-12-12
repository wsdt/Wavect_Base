import EventEmitter = require("events");
const chatRoomEvents = new EventEmitter.EventEmitter();

class Chatroom {
  public chatroomName: string;
  private users: string[] = [];

  constructor(chatroomName: string) {
    this.chatroomName = chatroomName;

    chatRoomEvents.on("sendMsg", this.notifyAllUsers);
  }

  public addUser(username: string) {
    this._users.push(username);
    chatRoomEvents.emit("sendMsg", username + " joined the chat.");
  }

  public removeUser(username: string) {
    this._users.filter(value => {
      return value !== username;
    });
    chatRoomEvents.emit("sendMsg", username + " left the chatroom.");
  }

  private notifyAllUsers = (msg: string) => {
    for (const user of this.users) {
      console.warn(`${this.chatroomName}: Msg to ${user} : ${msg}`);
    }
  };
}

const chatroom = new Chatroom("example_chat");

const usernames: string[] = ["Kevin", "Martin", "Robert"];
for (const username of usernames) {
  chatroom.addUser(username);
}

chatroom.removeUser("Martin");
chatroom.addUser("Mariella");
