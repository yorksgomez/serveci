import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  defaultTextInput: {
    fontSize: 15,
    fontWeight: "500",
    color: "#EFEFEF",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#AE0001",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#AE0001"
  }
});

export default class InverseTextInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        placeholderTextColor="#CECECE"
        {...this.props}
        style={[styles.defaultTextInput, this.props.style]}
      />
    );
  }

}