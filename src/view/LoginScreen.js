import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import DefaultButton from '@/view/components/DefaultButton';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultText from '@/view/components/DefaultText';
import DefaultTextInput from '@/view/components/DefaultTextInput';
import UserController from '@/controller/UserController';

const styles = StyleSheet.create({
  rightText: {
    textAlign: "right"
  },
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  wrap: {
    marginTop: 0,
    width: 250,
  },
  title: {
    marginBottom: 50
  },
  inputsContainer: {
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: 15
  },
  textInputParent: {
    flexDirection: 'row'
  },
  textInputIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 50,
    elevation: 50,
    top: 10,
    left: 10
  },
  hideIcon: {
    opacity: 0
  },
  textInput: {
    flex: 1
  },
  registerContainer: {
    marginTop: 90
  },
  textCenter: {
    textAlign: "center"
  },
  registerLink: {
    textDecorationLine: "underline",
    fontWeight: "bold"
  }
});

export default class LoginScreen extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      params: {
        email: '',
        password: '' 
      },
      showEmailIcon: true,
      showPasswordIcon: true
    };
  
    this.controller = new UserController();
  }

  render() {
    return (
      <BaseScreen style={styles.mainView}>
        <View style={styles.wrap}>
          <DefaultTitle style={styles.title}>Inicio</DefaultTitle>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <DefaultText>Correo</DefaultText>
              <View style={styles.textInputParent}>
                <Image source={require('@/assets/img/icono-usuario.png')} style={[styles.textInputIcon, !this.state.showEmailIcon ? styles.hideIcon : {}]} />
                <DefaultTextInput 
                  onChangeText={ (t) => this.setState({ params: { ...this.state.params, email: t } }) } 
                  onFocus={() => this.setState({showEmailIcon: false})}
                  onEndEditing={() => this.state.params.email == '' ? this.setState({showEmailIcon: true}) : this.setState({showEmailIcon: false}) }
                  keyboardType="email-address" 
                  style={styles.textInput} />
              </View>
            </View>
            <View>
              <DefaultText>Contraseña</DefaultText>
              <View style={styles.textInputParent}>
                <Image source={require('@/assets/img/icono-contraseña.png')} style={[styles.textInputIcon, !this.state.showPasswordIcon ? styles.hideIcon : {}]} />
                <DefaultTextInput 
                  onChangeText={ (t) => this.setState({ params: { ...this.state.params, password: t} }) } 
                  onFocus={() => this.setState({showPasswordIcon: false})}
                  onEndEditing={() => this.state.params.password == '' ? this.setState({showPasswordIcon: true}) : this.setState({showPasswordIcon: false}) }
                  secureTextEntry={true} 
                  style={styles.textInput}
                />
              </View>
            </View>
            <View>
              <DefaultText style={styles.rightText}>¿Olvido su contraseña?</DefaultText>
            </View>
          </View>
          <DefaultButton
            title="Iniciar Sesion"
            onPress={() =>
              this.controller.attempt(
                this.state.params, 
                (auth) => {
                  UserController.setAuth(auth);
                  this.props.navigation.navigate("Home")
                },
                err => UserController.showError("No se ha podido iniciar sesión", "Correo o contraseña no coinciden")
              )
            }
          />
        </View>
        <View style={styles.registerContainer}>
          <DefaultText style={styles.textCenter}>¿No estas registrado?</DefaultText>
          <DefaultText
            style={[styles.textCenter, styles.registerLink]}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            ¡Registrate!
          </DefaultText>
        </View>
      </BaseScreen>
    );
  }

}
