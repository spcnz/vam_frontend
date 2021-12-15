import ApiService from './ApiService';

const ENDPOINTS = {
  POST: 'order/',
  GET: 'order/:id/',
  PUT: 'order/:id/',
  ALL: 'order/'
};

class OrderService extends ApiService {

    create = async ({ order, table }) => {
        const { data } = await this.apiClient.post(ENDPOINTS.POST, transformData(order, table));

        return data;
    };

    getOne = async id => {
        const { data } = await this.apiClient.get(ENDPOINTS.GET.replace(":id", id));

        return data;
    };

    updateStatus = async ({ id, status }) => {
      const { data } = await this.apiClient.put(ENDPOINTS.PUT.replace(":id", id), { status });
      
      return data;
    }

    getAll = async () => {
      const { data } = await this.apiClient.get(ENDPOINTS.ALL);
      
      return data;
    }
}

const transformData = (order, table) => {
  return { 
    table_order : table,
    waiter_assigned: 1,
    date : new Date(),
    order_items : order.all.map(item => {
      return { amount: item.quantity, menu_item: item.id }
    })
  }
}

const orderService = new OrderService();

export default orderService;