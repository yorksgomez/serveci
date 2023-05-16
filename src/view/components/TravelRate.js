import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DefaultText from '@/view/components/DefaultText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "800",
  },
  rate: {
    flexDirection: "row"
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 3
  }
});

export default class TravelRate extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <DefaultText style={styles.name}>{this.props.name}</DefaultText>
        <DefaultText style={styles.date}>{this.props.date}</DefaultText>
        <View style={styles.rate}>
          <Image source={require('@/assets/img/star.png')} style={styles.star} />
          <Image source={require('@/assets/img/star.png')} style={styles.star} />
          <Image source={require('@/assets/img/star.png')} style={styles.star} />
          <Image source={require('@/assets/img/star.png')} style={styles.star} />
          <Image source={require('@/assets/img/star.png')} style={styles.star} />
        </View>
      </View>
    );
  }

}