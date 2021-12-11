import httpService from './HttpService';

class ApiService {
  constructor() {
    this.apiHttp = httpService;
    this.apiClient = this.apiHttp.client;
  }
}

export default ApiService;