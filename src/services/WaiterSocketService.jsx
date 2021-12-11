import config from '../config';
import { orderArrived } from '../store/actions/OrderActions';

class WaiterSocketService  {

    constructor(options = {}) {
        this.socketRef = null;
        this.options = options;
    }

    connect = (waiterId, store) => {
        this.dispatch = store?.dispatch;
        this.socket = new WebSocket(this.options.baseURL + `${waiterId}/`);
        this.socket.onopen = () => {
            console.log('Waiter webSocket open');
        };
        this.socket.onerror = e => {
            console.log(e.message);
        };
        this.socket.onclose = () => {
            console.log("WebSocket closed let's reopen");
            this.connect();
        };
        this.socket.onmessage = ({ data }) => {
            console.log("received something !", data)
            this.dispatch(orderArrived(JSON.parse(data)));
        };
    }

    state = () => this.socket?.readyState;    
}

const options = {
    baseURL: `${config.WS_BASE_URL}/ws/waiter/notifications/`
};  

export default new WaiterSocketService(options);