import RequestController from '@/controller/RequestController';

export default class ServiceController extends RequestController {

  create(data, onSuccess = () => {}, onError = (err) => {}) {
    let request = this.buildRequest('create-rating', 'POST', data, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
}