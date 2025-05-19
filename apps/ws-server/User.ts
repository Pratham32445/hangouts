import type { WebSocket } from "ws";
import { Messages, type Message } from "types/ws"
import { RoomManager } from "./Manager/RoomManager";
export class User {
    Id: string;
    ws: WebSocket;
    constructor(Id: string, ws: WebSocket) {
        this.Id = Id;
        this.ws = ws;
        this.init();
    }   
    init() {
        this.ws.on("message", (event) => {
            const message: Message = JSON.parse(event.toString());
            const payload = message.payload;
            switch (message.type) {
                case Messages.joinRoom:
                    RoomManager.getInstance().getRoom(payload.roomId)?.joinRoom(this);
                    break;
                case Messages.leaveRoom:
                    RoomManager.getInstance().getRoom(payload.roomId)?.leaveRoom(payload.roomId);
                    break;
                case Messages.addSong:
                    RoomManager.getInstance().getRoom(payload.roomId)?.addSong(message.payload.song);
                    break;
                case Messages.newChatMessage:
                    RoomManager.getInstance().getRoom(payload.roomId)?.newMessage(payload.message);
                    break;
            }
        })
    }
}