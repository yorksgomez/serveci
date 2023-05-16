import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DefaultText from '@/view/components/DefaultText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between"
  },
  rateName: {
    flexDirection: "row",
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

export default class DomiInfo extends Component {

  constructor(props) {
    super(props);
    this.domi = props.domi;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rateName}>
            <DefaultText style={styles.name}>{this.domi.user.name}</DefaultText>
            <View style={styles.rate}>
                <DefaultText>{this.domi.rating}</DefaultText>
                <Image source={require('@/assets/img/star.png')} style={styles.star} />
            </View>
        </View>
        <View>
            <DefaultText style={styles.date}>{this.domi.info}</DefaultText>
        </View>
      </View>
    );
  }

}