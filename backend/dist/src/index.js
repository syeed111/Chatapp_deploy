import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
dotenv.config();
//const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes); //don't forget the front slash/api
app.use("/api/messages", messageRoutes);
if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}
server.listen(5001, () => {
    console.log("listening on port 5001");
});
