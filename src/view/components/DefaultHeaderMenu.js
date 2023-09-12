import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Linking } from 'react-native';
import DefaultText from '@/view/components/DefaultText';
import NavMenuItem from '@/view/components/NavMenuItem';
import UserController from '@/controller/UserController';

const styles = StyleSheet.create({
  menuParent: {
    marginLeft: 30,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 1,
  },
  btnContainer: {
    width: 40,
    height: 40,
    elevation: 50,
    zIndex: 50,
    marginTop: 25
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    position: "absolute",
    top: 5,
    left: -5,
    right: -5,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    zIndex: 10,
    flex: 1,
    height: 230,
    backgroundColor: "#fff",
  },
  userHeaderInfoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  userImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  pheight: {
    height: 250
  },
  psmal: {
    height: 70
  }
});

export default class DefaultHeaderMenu extends Component {

  state = {
    menuVisible: false
  };

  constructor(props) {
    super(props);
  }

  redirectApp(view) {
    this.setState({ menuVisible: false });
    this.props.navigation.navigate(view);
  }

  render() {
    return (
      <View style={[styles.menuParent, this.state.menuVisible ? styles.pheight : styles.psmal]}>
        {this.state.menuVisible ?
          (
            <View style={styles.menuContainer}>
              <View style={styles.userHeaderInfoContainer}>
                <Image
                  source={require('@/assets/img/navuser.png')}
                  style={styles.userImage}
                />
                <DefaultText>Estudiante</DefaultText>
              </View>
              <View style={styles.navMenu}>
                <NavMenuItem onPress={() => this.redirectApp("Profile")}>Actualizar datos</NavMenuItem>
                <NavMenuItem onPress={() => this.redirectApp("TravelLog")}>Mis servicios</NavMenuItem>
                <NavMenuItem onPress={() => this.redirectApp("Support") } >Chat soporte</NavMenuItem>
              </View>
            </View>
          )
          : null}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => this.setState({ menuVisible: !this.state.menuVisible })}
        >
          <Image
            source={require('@/assets/img/menu.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>
    );
  }

}