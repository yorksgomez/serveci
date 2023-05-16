import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  defaultSubtitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#363837"
  }
});

export default class DefaultSubtitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={[styles.defaultSubtitle, this.props.style]}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }

}