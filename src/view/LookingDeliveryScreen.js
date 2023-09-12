import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultText from '@/view/components/DefaultText';
import DefaultSubtitle from '@/view/components/DefaultSubtitle';
import GifImage from '@/view/components/GifImage';
import ServiceController from '@/controller/ServiceController';

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  wrap: {
    marginTop: 0,
    width: 320,
  },
  title: {
    marginBottom: 20
  },
  subtitle: {
    marginBottom: 35
  },
  moto: {
    justifyContent: "center",
    alignItems: "center",
  },
  motoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  motoText: {
    marginTop: 15,
    fontSize: 16
  }
});

const sleep = function (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

export default class LookingDeliveryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { tries: 0 };
    this.controller = new ServiceController();
  }

  find() {
    this.controller.create(
      {service_type: 'App\\Models\\Delivery'},
      (service) => {
        this.props.navigation.navigate('Service', {service: service});
      },
      (err) => {
        if(this.state.tries < 4) {
          this.setState({tries: this.state.tries + 1});
          
          sleep(500).then(() => this.find());
        }  
      }
    ); 
  }

  componentDidMount() {
    //this.find();
    sleep(3000).then( () =>  this.props.navigation.navigate('Service', {}));
  }

  render() {
    return (
      <BaseScreen style={styles.mainView}>
        <View style={styles.wrap}>
          <DefaultTitle style={styles.title}>Bienvenido</DefaultTitle>
          <DefaultSubtitle style={styles.subtitle}>Cargando </DefaultSubtitle>
          <View style={styles.moto}>
            <GifImage
              source={require('@/assets/img/esperandomoto.gif')}
              style={styles.motoImage}
            />
          </View>
        </View>
      </BaseScreen>
    );
  }

}