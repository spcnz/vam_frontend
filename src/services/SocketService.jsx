import config from '../config';

class SocketService {

    constructor(options = {}) {
        this.socketRef = null;
        this.options = options;
    }
  
    connect() {
        const { baseURL } = this.options;
        this.socketRef = new WebSocket(baseURL);
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
        return this.socketRef?.readyState;
    }

    waitForSocketConnection() {
        const socket = this.socketRef;
        return new Promise((resolve) => {
            if (socket.readyState !== socket.OPEN) {
              socket.onopen(() => {
                resolve();
              });
            } else {
              resolve();
            }
          });
      }
        

    sendData = async (data) => {
        await this.waitForSocketConnection()
        try {
            this.socketRef.send(JSON.stringify({ ...data }));
        }
        catch(err) {
            console.log(err.message);
        }  
  }
}

const options = {
    baseURL: `${config.WS_BASE_URL}/ws/chat/`
};   

const socketService = new SocketService(options);

export default socketService;