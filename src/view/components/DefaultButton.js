import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#00FF00",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "1000",
    fontFamily: "lighter",
    alignSelf: "center",
  }
});

export default class DefaultButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient
          colors={["#099070", "#C52360"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{this.props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

}