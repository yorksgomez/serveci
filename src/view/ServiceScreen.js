import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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

export default class ServiceScreen extends Component {
    
    constructor(props) {
        super(props);
        this.service = this.props.route.params.service;
        this.controller = new ServiceController();
    }

    render() {
        console.log(this.service);
        return (
            <BaseScreen style={styles.mainView}>
                <View style={styles.wrap}>
                    <DefaultTitle style={styles.title}>Bienvenido</DefaultTitle>
                    <DefaultSubtitle style={styles.subtitle}>{ServiceController.user().name}</DefaultSubtitle>
                    <View style={styles.mapContainer}>
                        <DefaultText style={styles.service}>Servicio activo</DefaultText>
                        <Map style={styles.map}></Map>
                        <DefaultText style={styles.estimated}>Tiempo estimado {this.service.estimated} minutos</DefaultText>
                    </View>
                    <IconicedContent
                        source={require('@/assets/img/navuser.png')}
                        style={styles.iconiced}
                    >
                        <DomiInfo domi={this.service.domi} />
                    </IconicedContent>
                    <View style={styles.buttons}>
                        <CallButton phone={this.service.domi.user.phone}></CallButton>
                        <FlatButton 
                            title="Cancelar" 
                            onPress={() => 
                                this.controller.cancel(
                                    () => this.props.navigation.navigate("Home", {enableModal: true, domi: this.service.domi}),
                                    (err) => this.props.navigation.navigate("Home", {enableModal: true, domi: this.service.domi}),
                                )  
                            }></FlatButton>
                    </View>
                </View>
            </BaseScreen>
        );
    }

}