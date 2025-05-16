import type { WebSocket } from "ws";
import { User } from "../User";

export class UserManager {
    users: Map<string, User>
    static instance : UserManager | null;
    constructor() {
        this.users = new Map();
        UserManager.instance = null;
    }
    static getInstance() {
        if(!this.instance) {
            this.instance = new UserManager();
        }
        return this.instance
    }
    addUser(userId: string, ws: WebSocket) {
        if (!this.users.has(userId)) {
            const user = new User(userId, ws);
            this.users.set(userId, user);
        }
    }
}