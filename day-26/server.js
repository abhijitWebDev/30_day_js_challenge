import { WebSocket, WebSocketServer } from "ws";

const server = new WebSocketServer({port: 8080})

server.on("connection", function connection(ws)  {
    console.log("client connected")
    ws.on("message", (data) => {
        const {type, message, username} = JSON.parse(data);
        console.log(`Received ${type}: ${message} from ${username}`);

        if(type === "message") {
            // here we will broadcast to all the clients
            server.clients.forEach((client) => {
                if(client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({type: "message" , message, username}))
                }
            });
        }
    });
     ws.on("close", () => {
        console.log("Connection closed");
      });
    
      ws.on("error", (error) => {
        console.error("Websocket error: " + error);
      });
      ws.send(
        JSON.stringify({
          type: "message",
          username: "server",
          message: "Welcome to the chat!",
        })
      );
})
