import { userRouter } from "./routes/User.routes";
import app from "./server";

app.use("/user",userRouter);

app.listen(process.env.PORT || 3001);