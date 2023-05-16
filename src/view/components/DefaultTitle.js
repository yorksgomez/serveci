import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  defaultTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#363837"
  }
});

export default class DefaultTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.defaultTitle, this.props.style]}>{this.props.children}</Text>
    );
  }

}