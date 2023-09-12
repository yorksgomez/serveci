import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import DefaultButton from '@/view/components/DefaultButton';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultTextInput from '@/view/components/DefaultTextInput';
import InverseTextInput from '@/view/components/InverseTextInput';
import DefaultSubtitle from '@/view/components/DefaultSubtitle';
import UserController from '@/controller/UserController';

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  wrap: {
    width: 320,
    marginTop: 50
  },
  photoContainer: {
    marginTop: 25,
    marginBottom: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  photoSubtitle: {
    marginBottom: 15
  },
  photo: {
    width: 80,
    height: 80
  },
  title: {
    marginBottom: 30
  },
  inputsContainer: {
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: "row"
  },
  textInput: {
    marginBottom: 5,
    minWidth: "50%",
    flex: 1
  },
  buttonContainer: {
    paddingHorizontal: 20
  },
  button: {
    marginHorizontal: 25,
    flex: 1
  }
});

export default class ProfileScreen extends Component {
  
  constructor(props) {
    super(props);
    
    this.user = UserController.user() ?? {};
    this.state = {
      params: {
        name: this.user.name ?? '',
        lastname: this.user.lastname ?? '',
        phone: this.user.phone ?? '',
        nit: this.user.nit ?? '',
        nit_type: 'CC'
      }
    };

    this.controller = new UserController();
  }

  render() {
    return (
      <BaseScreen style={styles.mainView}>
        <View style={styles.wrap}>
          <DefaultTitle style={styles.title}>Actualizar Datos</DefaultTitle>
          <View style={styles.photoContainer}>
            <DefaultSubtitle style={styles.photoSubtitle}>Datos de usuario</DefaultSubtitle>
            <Image
              source={require('@/assets/img/foto-usuario.png')}
              style={styles.photo}
            />
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <InverseTextInput placeholder="Nombres*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, name:t }}) } value={this.state.params.name} />
              <InverseTextInput placeholder="Apellidos*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, lastname:t }}) } value={this.state.params.lastname} />
            </View>
            <View style={styles.inputContainer}>
              <InverseTextInput placeholder="Tipo de documento*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, nit:t }}) } value={this.state.params.nit_type} editable={false} />
              <InverseTextInput placeholder="N° de documento*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, nit_type:t }}) } value={this.state.params.nit} />
            </View>
            <View style={styles.inputContainer}>
              <DefaultTextInput placeholder="Telefono*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, phone:t }}) } value={this.state.params.phone} />
              <DefaultTextInput placeholder="Correo electronico*" style={styles.textInput} value={this.user.email} editable={false} />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton
              style={styles.button}
              title="Actualizar"
              onPress={() =>
                this.controller.update(
                  this.state.params,
                  data => {
                    this.controller.current(
                      user => {
                        console.log("user:", user);
                        UserController.setUser(user);
                        this.props.navigation.navigate('Home');
                      },
                      err => this.props.navigation.navigate('Login')
                    ); 
                  },
                  err => this.props.navigation.navigate('Login')//console.log(err)
                )
              }
            />
          </View>
        </View>
      </BaseScreen>
    );
  }

}