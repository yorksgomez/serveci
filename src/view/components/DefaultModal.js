import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

const styles = StyleSheet.create({
    parent: {
        position: "absolute",

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: 250,
        height: 240,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#A31C30",
        padding: 20
    }
});

export default class DefaultModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.centeredView, styles.parent]}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.visible}
                >
                    <View
                        style={[styles.centeredView, styles.elementContainer]}
                    >
                        <View style={styles.modalView}>
                            {this.props.children}
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}