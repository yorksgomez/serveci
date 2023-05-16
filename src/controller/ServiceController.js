import RequestController from '@/controller/RequestController';
import LocationController from '@/controller/LocationController';

export default class ServiceController extends RequestController {
    
  create(data, onSuccess = (res) => {}, onError = (err) => {}) {
    this.location_controller = new LocationController();
    let this_service = this;
    console.log(this);
    
    this.location_controller.getCurrentLocation(
      (location) => {
        console.log(this_service);
        data = {
          ...data, 
          location: location.longitude + "," + location.latitude,
          information: 'pedido'
        };
        
        this.createRequest(data, onSuccess, onError);        
      },
      (err) => onError(err)  
    );
    
  }
  
  createRequest(data, onSuccess = () => {}, onError = (err) => {}) {
    let request = this.buildRequest('create-service', 'POST', data, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
  get(onSuccess = (services) => {}, onError = (err) => {}) {
    let request = this.buildRequest('get-user-services', 'POST', {}, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
  cancel(onSuccess = (services) => {}, onError = (err) => {}) {
    let request = this.buildRequest('cancel-service', 'POST', {}, true);
    return this.sendResponse(request, onSuccess, onError);
  }
  
}