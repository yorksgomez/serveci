import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#363837"
  }
});

export default class DefaultText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.defaultText, this.props.style]} onPress={this.props.onPress}>{this.props.children}</Text>
    );
  }

}