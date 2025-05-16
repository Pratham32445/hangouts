export interface Message {
    type: string,
    payload: any
}

export interface Song {
    title: string,
    description: string,
    duration: number
}

export interface ChatMessage {
    userId : string;
    message : string;
    time : Date;
}

export const Messages = {
    joinRoom: "join-room",
    leaveRoom: "leave-room",
    newUser : "new-user",
    initialQueue: "initial-queue",
    initialMessages : "initial-messages",
    currentSeek : "current-seek",
    addSong : "add-song",
    newChatMessage : "new-chat-message"
}