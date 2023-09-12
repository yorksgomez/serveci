import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import DefaultButton from '@/view/components/DefaultButton';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultTextInput from '@/view/components/DefaultTextInput';
import DefaultCheckbox from '@/view/components/DefaultCheckbox';
import UserController from '@/controller/UserController';

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  wrap: {
    width: 270,
  },
  title: {
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: "row"
  },
  textInput: {
    marginBottom: 5,
    minWidth: "50%"
  },
  checkContainer: {
    marginVertical: 25,
    paddingHorizontal: 10
  }
});

export default class RegisterScreen extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      params: {
        name: "",
        lastname: "",
        email: "",
        nit: "",
        password: "",
        c_password: "",
        phone: "",
        terms: false, 
      }
    };
    
    this.controller = new UserController(); 
  }

  render() {
    return (
      <BaseScreen style={styles.mainView}>
        <View style={styles.wrap}>
          <DefaultTitle style={styles.title}>Registrate</DefaultTitle>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <DefaultTextInput placeholder="Nombres*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, name:t}}) } />
              <DefaultTextInput placeholder="Apellidos*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, lastname:t}}) } />
            </View>
            <DefaultTextInput placeholder="Correo electronico*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, email:t}}) } keyboardType="email-address" />
            <DefaultTextInput placeholder="Numero de documento*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, nit:t}}) } />
            <DefaultTextInput placeholder="Contraseña*" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, password:t}}) } secureTextEntry={true} />
            <DefaultTextInput placeholder="Confirmar Contraseña" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, c_password:t}}) } secureTextEntry={true} />
            <DefaultTextInput placeholder="Telefono" style={styles.textInput} onChangeText={ (t) => this.setState({params:{...this.state.params, phone:t}}) } />
          </View>
          <View style={styles.checkContainer}>
            <DefaultCheckbox onPress={ (c) => this.setState({params:{...this.state.params, terms:c}}) } >
              Aceptar terminos y condiciones
            </DefaultCheckbox>
          </View>
          <DefaultButton
            title="Registro"
            onPress={ () => 
              this.props.navigation.navigate('Login')
            }
          />
        </View>
      </BaseScreen>
    );
  }

}