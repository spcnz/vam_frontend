import config from '../config';

class SocketService {
    static instance = null;

    constructor() {
        this.socketRef = null;
    }
  
    static getInstance() {
      if (!SocketService.instance) {
        SocketService.instance = new SocketService();
      }
      return SocketService.instance;
    }
  
    connect() {
        const path = config.API_BASE_URL;
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            console.log('WebSocket open');
        };
        this.socketRef.onerror = e => {
            console.log(e.message);
        };
        this.socketRef.onclose = () => {
            console.log("WebSocket closed let's reopen");
            this.connect();
        };
    }

    state() {
        return this.socketRef.readyState;
    }

    waitForSocketConnection(callback){
        const socket = this.socketRef;
        const recursion = this.waitForSocketConnection;
        setTimeout(
            function () {
            if (socket.readyState === 1) {
                console.log("Connection is made")
                if(callback != null){
                callback();
                }
                return;

            } else {
                console.log("wait for connection...")
                recursion(callback);
            }
            }, 1); 
    }
}    

const socketService = SocketService.getInstance();

export default socketService;