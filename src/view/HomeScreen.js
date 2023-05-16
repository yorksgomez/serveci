import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import BaseScreen from '@/view/BaseScreen';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultText from '@/view/components/DefaultText';
import DefaultSubtitle from '@/view/components/DefaultSubtitle';
import IconicedContent from '@/view/components/IconicedContent';
import DefaultModal from '@/view/components/DefaultModal';
import FlatButton from '@/view/components/FlatButton';
import RatingController from '@/controller/RatingController';

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  modalTitle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 20
  },
  modalNameContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  modalName: {
    marginLeft: 25
  },
  modalImage: {
    width: 40,
    height: 40,
  },
  rate: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  rateInput: {
    
  },
  star: {
    width: 25,
    height: 25
  },
  modalButton: {
    backgroundColor: "#1D896F"
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
  iconicedContainer: {
    marginVertical: 20
  },
  iconiced: {
    marginBottom: 20
  },
  iconicedContent: {
    fontSize: 20
  }
});

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      rate: 5
    };
    
    this.controller = new RatingController();
  }

  render() {
    this.domi = {};
    if(this.props.route.params != undefined && this.props.route.params.enableModal == true) {
      this.props.route.params.enableModal = false;
      this.domi = this.props.route.params.domi;
      this.setState({modalVisible: true})
    }
    
    return (
      <BaseScreen style={styles.mainView}>
        <DefaultModal visible={this.state.modalVisible}>
          <DefaultText style={styles.modalTitle}>Califica tu servicio</DefaultText> 
          <View style={styles.modalNameContainer}>
            <Image source={require('@/assets/img/navuser.png')} style={styles.modalImage} />
            <DefaultText style={styles.modalName}>{this.domi.name}</DefaultText>
          </View>
          <View style={styles.rate}>
            <Rating
              imageSize={30}
              style={styles.rateInput}
              startingValue={5}
              onFinishRating={(rate) => this.setState({rate: rate})}
            />
          </View>
          <FlatButton 
            title="Calificar" 
            style={styles.modalButton} 
            onPress={() => {
              this.controller.create({rate: this.state.rate});
              this.setState({modalVisible: false});
            }}>
          </FlatButton>
        </DefaultModal>
        <View style={styles.wrap}>
          <DefaultTitle style={styles.title}>Bienvenido</DefaultTitle>
          <DefaultSubtitle style={styles.subtitle}>{RatingController.user().name}</DefaultSubtitle>
          <View style={styles.iconicedContainer}>
            <IconicedContent
              source={require('@/assets/img/pidetudomi.png')}
              style={styles.iconiced}
              onPress={() => this.props.navigation.navigate("LookingDelivery")}
            >
              <DefaultText style={styles.iconicedContent}>Pide tu domi</DefaultText>
            </IconicedContent>
            <IconicedContent
              source={require('@/assets/img/pidetumoto.png')}
              onPress={() => this.props.navigation.navigate("LookingTravel")}
            >
              <DefaultText style={styles.iconicedContent}>Pide tu viaje en moto</DefaultText>
            </IconicedContent>
          </View>
        </View>
      </BaseScreen>
    );
  }

}