import orderReducer from '../store/reducers/OrderReducer';
import ApiService from './ApiService';


const ENDPOINTS = {
  POST: 'order/'
};

class OrderService extends ApiService {


    create = async ({ order, table }) => {

      // if (!this.apiSocket.state()) 
      //   this.openConnection();
      // this.apiSocket.sendData(order);
      // console.log('Socket state ', this.apiSocket.state())
        // const { data } = await this.apiClient.post(ENDPOINTS.CREATE, 
        //   {
        //     table_id: 1,
        //     ordered_items: order.products
        //   }
        // );
      
        const { data } = await this.apiClient.post(ENDPOINTS.POST, this.transformData(order, table));

        // return data;
        return data;

         
    };

    transformData = (order, table) => {
      return { 
        table_order : table,
        waiter_assigned: 1,
        date : new Date(),
        order_items : order.products.map(item => {
          return { amount: item.quantity, menu_item: item.id }
        })
      }
    }

    openConnection = () => {
      this.apiSocket.connect();
    }
}

const orderService = new OrderService();

export default orderService;