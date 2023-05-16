import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from '@/view/components/DefaultText';
import DefaultSubtitle from '@/view/components/DefaultSubtitle';

const styles = StyleSheet.create({
  parent: {
    justifyContent: "flex-start"
  },
  headerContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: 15,
    marginTop: 5
  },
  user: {
    fontSize: 18
  },
  close: {
    fontWeight: "800",
    padding: 10,
  }
});

export default class CloseableScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.headerContainer}>
          <DefaultText style={styles.user}>Usuario 0</DefaultText>
          <DefaultSubtitle
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.close}
          >
            X
          </DefaultSubtitle>
        </View>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </View>
    );
  }

}