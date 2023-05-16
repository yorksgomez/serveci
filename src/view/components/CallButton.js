import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {

    },
    button: {
        width: 50,
        height: 50
    }
});

export default class CallButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('tel:' + this.props.phone)} >
            <Image style={styles.button} source={require('@/assets/img/llamar.png')} />
        </TouchableOpacity>
    );
  }

}