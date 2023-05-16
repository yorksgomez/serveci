import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

export default class LocationController {

  getCurrentLocation(onSuccess = (location) => {}, onError = (err) => {}) {
    
    Geolocation.requestAuthorization(
      () => Geolocation.getCurrentPosition(
        position => onSuccess(position.coords),
        error => onError(error) ,
        { enableHighAccuracy: false, timeout: 30000, }
      ),
      error => onError(error)
    );
    
  }
      
}