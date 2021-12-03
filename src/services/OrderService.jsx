import ApiService from './ApiService';


const ENDPOINTS = {
  ONE: 'order'
};

class OrderService extends ApiService {


    create = async order => {
      if (!this.apiSocket.state()) 
        this.openConnection();
      this.apiSocket.sendData(order);
      // console.log('Socket state ', this.apiSocket.state())
        // const { data } = await this.apiClient.post(ENDPOINTS.CREATE, 
        //   {
        //     table_id: 1,
        //     ordered_items: order.products
        //   }
        // );

        return {};
  };

    openConnection = () => {
      this.apiSocket.connect();
    }
}

const orderService = new OrderService();

export default orderService;