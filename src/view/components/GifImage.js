import React, { Component } from 'react';
import { Image } from 'react-native';

export default class DefaultText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={this.props.style} source={this.props.source} onPress={this.props.onPress} />
    );
  }

}