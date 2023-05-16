import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  defaultView: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "transparent"
  }
});

const image = require("@/assets/img/fondoapp.png");

export default class BaseScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        style={[this.props.style, styles.defaultView]}
        source={image}
        resizeMode="cover">
        {this.props.children}
      </ImageBackground>
    );
  }

}