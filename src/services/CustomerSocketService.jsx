import config from '../config';
import { updatedStatus } from '../store/actions/OrderActions';

class CustomerSocketService  {

    constructor(options = {}) {
        this.socketRef = null;
        this.options = options;
    }

    connect = (orderId, store) => {
        this.dispatch = store?.dispatch;

        const arr = ["IN PROGRESS", "PREPARED", "PAID"];
        for (let i=0; i < 3; i++) {
            const ind = i;
            setTimeout(disp => {
                disp(updatedStatus({ id: 138, status: arr[ind]}))
            }, 2*i * 4000, store?.dispatch)
        }

        
        this.socket = new WebSocket(this.options.baseURL + `${orderId}/`);
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
            this.dispatch(updatedStatus(data));
        };
        
    }

    state = () => this.socket?.readyState;    
}



const options = {
    baseURL: `${config.WS_BASE_URL}/ws/order/notifications/`
};  

export default new CustomerSocketService(options);