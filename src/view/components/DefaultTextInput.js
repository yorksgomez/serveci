import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  defaultTextInput: {
    fontSize: 15,
    fontWeight: "500",
    color: "#363837",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#AE0001",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFF"
  }
});

export default class DefaultTextInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        {...this.props}
        placeholderTextColor="#bdc3c7"
        style={[styles.defaultTextInput, this.props.style]}
      />
    );
  }

}