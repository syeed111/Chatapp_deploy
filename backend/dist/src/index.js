import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes); //don't forget the front slash/api
app.use("/api/messages", messageRoutes);
app.listen(5001, () => {
    console.log("listening on port 5000");
});
