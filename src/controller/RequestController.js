import { Alert } from "react-native";

export default class RequestController {
  
  static auth = {
    user: null,
    token: ''
  };
  
  buildRequest(url, method, data, useAuth = false) {
    let options = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': useAuth ? 'Bearer ' + RequestController.token() : ''
      }
    };
    
    let endpoint = 'https://tudomiya.ditscol.com/api/' + url + '?' + ( new URLSearchParams( data ).toString() );
    return fetch(endpoint, options);
  }
  
  sendResponse(promise, onSuccess, onError) {
    promise.
      then( (response) => response.json() ).
      then( (json) => {

        if(json.success) onSuccess(json.data);
        else onError(json);
        
      }).
      catch( onError );
  }

  static showError(title, message) {
    Alert.alert(
      title,
      message
    );
  }
  
  static auth() {
    return RequestController.auth; 
  }
  
  static setAuth(auth) {
    RequestController.auth = auth;
  }
  
  static user() {
    return RequestController.auth.user;
  }
  
  static setUser(user) {
    RequestController.auth.user = user;
  }
  
  static token() {
    return RequestController.auth.token;
  }


}