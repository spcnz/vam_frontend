import ApiService from './ApiService';


const ENDPOINTS = {
  ONE: 'api/order'
};

class OrderService extends ApiService {

    create = async order => {
        const { data } = await this.apiClient.post(ENDPOINTS.CREATE, 
          {
            table_id: 1,
            ordered_items: order.products
          }
        );

        return data;
  };
}

const orderService = new OrderService();

export default orderService;