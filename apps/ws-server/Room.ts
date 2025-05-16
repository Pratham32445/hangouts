import { Messages, type Song } from "types/ws";
import type { User } from "./User";
import type { ChatMessage, Message } from "types/ws";

export class Room {
    roomId: string;
    users: User[];
    songQueue: Song[];
    messages: ChatMessage[];
    currentSeek: Number;
    currentPlayingSong: Song | null;
    constructor(roomId: string) {
        this.roomId = roomId;
        this.users = [];
        this.songQueue = [];
        this.messages = [];
        this.currentPlayingSong = null;
        this.currentSeek = 0;
    }
    joinRoom(user: User) {
        const isUser = this.users.find((x) => x.Id == user.Id);
        if (isUser) return;
        this.users.push(user);
        user.ws.send(JSON.stringify({
            type: Messages.initialQueue,
            queue: this.songQueue
        }))
        user.ws.send(JSON.stringify({
            type: Messages.initialMessages,
            messages: this.messages
        }))
        user.ws.send(JSON.stringify({
            type : Messages.currentSeek,
        }))
        this.notifyAll({
            type: Messages.newUser,
            payload: {
                user
            }
        })
    }
    leaveRoom(userId: string) {
        this.users.filter((x) => x.Id != userId);
    }
    addSong(song: Song) {
        this.songQueue.push(song);
    }
    notifyAll(message: Message) {
        this.users.forEach((user) => {
            user.ws.send(JSON.stringify(message));
        })
    }
}