import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  defaultTextInput: {
    fontSize: 15,
    fontWeight: "500",
    color: "#C1C3C2",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#8B8F8E",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#8B8F8E"
  }
});

export default class InverseTextInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={[styles.defaultTextInput, this.props.style]}
      />
    );
  }

}