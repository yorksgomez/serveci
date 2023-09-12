import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Image, Animated } from 'react-native';
import BaseScreen from '@/view/BaseScreen';

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
    image: {
        width: "100%",
        height: 280
    }
});

const sleep = function (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

export default class LoadingScreen extends Component {

    state = {
        fadeAnim: new Animated.Value(0)
    };

    fadeIn = () => {
        Animated.timing(this.state.fadeAnim, { 
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    };

    constructor(props) {
        super(props);
    }

    loadApp() {
        sleep(1600).then(() => {
            this.props.navigation.navigate("Login");
        });
    }

    componentDidMount() {
        this.loadApp();
        this.fadeIn();
    }

    render() {
        return (
            <BaseScreen style={styles.mainView}>
                <SafeAreaView style={styles.wrap}>
                    <Animated.View style={
                        [styles.moto, 
                        {
                            opacity: this.state.fadeAnim
                        }]}
                    >
                        <Image
                            source={require('@/assets/img/domiyasinfondo.png')}
                            style={styles.image}
                        />
                    </Animated.View>
                </SafeAreaView>
            </BaseScreen>
        );
    }

}