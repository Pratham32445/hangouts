import { WebSocketServer } from "ws";
import { UserManager } from "./Manager/UserManager";

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (ws, req) => {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const roomId = url.searchParams.get("roomId")!;
    console.log(roomId);
    if (roomId) {
        UserManager.getInstance().addUser(roomId, ws);
    }
})