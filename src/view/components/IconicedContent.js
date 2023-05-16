import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  elementContainer: {
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: 2,
    shadowRadius: 2,
    flexDirection: "row",
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  imageContainer: {
    width: 90,
    padding: 10
  },
  image: {
    width: "100%",
    height: "100%",
    elevation: 500
  },
  contentContainer: {
    padding: 10,
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default class IconicedContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.elementContainer, this.props.style, this.props.elementContainerStyle]}
        onPress={this.props.onPress}
      >
        <View style={[styles.imageContainer, this.props.imageContainerStyle]}>
          <Image style={[styles.image, this.props.imageStyle]} source={this.props.source} />
        </View>
        <View style={[styles.contentContainer, this.contentContainerStyle]}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }

}