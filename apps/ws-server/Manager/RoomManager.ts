import { Room } from "../Room";
import { prismaClient } from "db";

export class RoomManager {
    rooms: Map<string, Room>;
    static instance : RoomManager | null;
    constructor() {
        this.rooms = new Map();
        RoomManager.instance = null;
    }
    static getInstance() {
        if(!this.instance) {
            this.instance = new RoomManager();
        }
        return this.instance;
    }
    getRoom(roomId: string) {
        if (!this.rooms.has(roomId)) {
            this.createRoom(roomId);
        }
        return this.rooms.get(roomId);
    }
    async createRoom(roomId: string) {
        const room = await prismaClient.room.findFirst({
            where: {
                Id: roomId
            }
        })
        if (!room) return false;
        const newRoom = new Room(roomId);
        this.rooms.set(roomId, newRoom);
        return true;
    }
}