import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import CloseableScreen from '@/view/CloseableScreen';
import DefaultTitle from '@/view/components/DefaultTitle';
import IconicedContent from '@/view/components/IconicedContent';
import TravelRate from '@/view/components/TravelRate';
import ServiceController from '@/controller/ServiceController';

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "flex-start",
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
  iconicedContainer: {
    marginVertical: 20
  },
  iconiced: {
    marginBottom: 20
  }
});

export default class TravelLogScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: []
    };

    this.controller = new ServiceController();
  }

  componentDidMount() {
    this.controller.get((s) => {console.log(s); this.setState({services: s})}, (err) => console.log(err));
  }

  render() {
    return (
      <BaseScreen style={styles.mainView}>
        <CloseableScreen style={styles.wrap} navigation={this.props.navigation}>
          <DefaultTitle style={styles.title}>Mis Viajes</DefaultTitle>
          <View style={styles.iconicedContainer}>
            {this.state.services.map(service => 
              <IconicedContent
                source={require('@/assets/img/navuser.png')}
                style={styles.iconiced}
              >
                <TravelRate name={service.domi.user.name} date={service.createdAt} />
              </IconicedContent>
            )}
          </View>
        </CloseableScreen>
      </BaseScreen>
    );
  }

}