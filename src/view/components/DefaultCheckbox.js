import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#363837"
  },
  iconStyle: {
  },
  innerIconStyle: {
    borderWidth: 2,
    borderRadius: 2
  },
  textStyle: {
    marginLeft: -9
  }
});

export default class DefaultCheckbox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BouncyCheckbox
        style={[this.props.style, styles.defaultText]}
        size={20}
        fillColor="#099070"
        unfillColor="#FFFFFF"
        text={this.props.children}
        iconStyle={[styles.iconStyle, this.props.iconStyle]}
        innerIconStyle={[styles.innerIconStyle, this.props.innerIconStyle]}
        textStyle={[styles.textStyle, this.props.textStyle]}
        onPress={this.props.onPress}
      />
    );
  }

}