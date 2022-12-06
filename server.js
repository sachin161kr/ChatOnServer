const app = require("express")();
const process = require("process");

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("what is socket : ", socket);
  console.log("Socket is active to be connected");

  socket.on("chat", (payload) => {
    console.log("what is payload : ", payload);
    io.emit("chat", payload);
  });
});

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log("Server is listening on port 5000...");
});
