import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://backend.alcognerd.site",
    methods: ["GET", "POST"],
  },
});
const onlineUsers = {};
io.on("connection", (socket) => {
  socket.on("joinRoom", (groupId) => {
    socket.join(groupId);
    console.log(`User joined room: ${groupId}`);
  });
  socket.on("register_admin", (adminId) => {
    onlineUsers[adminId] = socket.id;
  });
  socket.on("disconnect", () => {
    const adminId = Object.keys(onlineUsers).find(
      (key) => onlineUsers[key] === socket.id
    );
    if (adminId) delete onlineUsers[adminId];
  });
});

export { app, server, io, onlineUsers };
