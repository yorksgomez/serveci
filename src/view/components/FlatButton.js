import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#A31C30",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35
  },
  appButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "900",
    fontFamily: "lighter",
    alignSelf: "center",
  }
});

export default class FlatButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.appButtonContainer,this.props.style]}>
        <Text style={styles.appButtonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }

}