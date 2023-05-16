import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#363837",
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#B4B6B5",
    textAlign: "center",
    marginVertical: 5
  }
});

export default class NavMenuItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.defaultText, this.props.style]} onPress={this.props.onPress}>{this.props.children}</Text>
    );
  }

}