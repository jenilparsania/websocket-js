import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port : 8080});

//event handler 
wss.on("connection" , function(socket){
    console.log("user connected");
    setInterval(()=>{
        socket.send("Run rate of australia is " + Math.random()*10)
    },3000);
    socket.send("hello");

    socket.on("message", (e)=>{
        console.log(e.toString());
        
    })
    
});
