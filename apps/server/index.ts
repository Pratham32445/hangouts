import { roomRouter } from "./routes/rooms.routes";
import { userRouter } from "./routes/User.routes";
import app from "./server";

app.use("/user",userRouter);
app.use("/rooms",roomRouter);

app.listen(process.env.PORT || 3001);