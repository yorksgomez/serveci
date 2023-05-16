import MapView from 'react-native-maps/lib/MapView';
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    map: {
        elevation: 30,
        zIndex: 30,
        shadowColor: "#000",
        shadowOffset: 1,
        shadowRadius: 1,
        width:"100%",
        height: 200,
        position: 'absolute',
    }
});

export default class Map extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView
      style={[styles.map, this.props.style]}  
      showsUserLocation={true}  
      zoomEnabled={true}  
      zoomControlEnabled={true}  
      initialRegion={{  
        latitude: 28.579660,   
        longitude: 77.321110,  
        latitudeDelta: 0.0922,  
        longitudeDelta: 0.0421,  
      }}> 
      </MapView>
    );
  }

}