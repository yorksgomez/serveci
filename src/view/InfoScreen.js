import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import BaseScreen from '@/view/BaseScreen';
import DefaultTitle from '@/view/components/DefaultTitle';
import DefaultText from '@/view/components/DefaultText';
import DefaultSubtitle from '@/view/components/DefaultSubtitle';
import IconicedContent from '@/view/components/IconicedContent';
import Map from './components/Map';
import DomiInfo from './components/DomiInfo';
import CallButton from './components/CallButton';
import FlatButton from './components/FlatButton';
import ServiceController from '@/controller/ServiceController';

const styles = StyleSheet.create({
    mainView: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    wrap: {
        marginTop: 0,
        width: 320,
    },
    title: {
        marginBottom: 10
    },
    subtitle: {
        marginBottom: 25
    },
    mapContainer: {
        marginVertical: 15
    },  
    map: {
        width: "100%",
        height: 250,
        backgroundColor: "#FFF"
    }, 
    estimated: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 250
    },
    iconicedContainer: {
        marginVertical: 20
    },
    iconiced: {
        marginBottom: 20
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    }
});

const img = require('@/assets/img/calculadora.jpg');

export default class InfoScreen extends Component {
    
    constructor(props) {
        super(props);
        this.service = this.props.route.params.service;
        this.controller = new ServiceController();
    }

    render() {
        return (
            <BaseScreen style={styles.mainView}>
                <View style={styles.wrap}>
                    <DefaultTitle style={styles.title}>Bienvenido</DefaultTitle>
                    <DefaultSubtitle style={styles.subtitle}>Estudiante</DefaultSubtitle>
                    <View style={styles.mapContainer}>
                        <DefaultText style={styles.service}>Objeto perdido</DefaultText>
                        <Image source={img} style={styles.map}>

                        </Image>
                    </View>
                    <View
                        style={styles.iconiced}
                    >
                        <Text>Casio 29fx</Text>
                    </View>
                    <View style={styles.buttons}>
                        <FlatButton 
                            title="Salir" 
                            onPress={() => 
                                this.controller.cancel(
                                    () => this.props.navigation.navigate("Home", {enableModal: true, domi: {}}),
                                    (err) => this.props.navigation.navigate("Home", {enableModal: true, domi: {}}),
                                )  
                            }></FlatButton>
                    </View>
                </View>
            </BaseScreen>
        );
    }

}