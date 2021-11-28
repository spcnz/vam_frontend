import socketService from './SocketService';
import httpService from './HttpService';

class ApiService {
  constructor() {
    this.apiSocket = socketService;
    this.apiHttp = httpService;
    this.apiClient = this.apiHttp.client;
  }
}

export default ApiService;