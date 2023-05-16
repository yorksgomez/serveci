import RequestController from '@/controller/RequestController';

export default class UserController extends RequestController {
  
  attempt(data, onSuccess = data => {}, onError = err => {} ) {
    let request = this.buildRequest('login', 'POST', data);
    return this.sendResponse(request, onSuccess, onError);
  }
  
  register(data, onSuccess = data => {}, onError = err=> {} ) {
    
    if(data.terms == false)
      return onError({message: "Debe aceptar los terminos y condiciones"});

    let request = this.buildRequest('register', 'POST', data);
    return this.sendResponse(request, onSuccess, onError);
  }
  
  update(data, onSuccess = data => {}, onError =  err => {}) {
    let request = this.buildRequest('update-current-user', 'POST', data, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
  current(onSuccess = data => {}, onError = err => {}) {
    let request = this.buildRequest('get-current-user', 'POST', {}, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
}