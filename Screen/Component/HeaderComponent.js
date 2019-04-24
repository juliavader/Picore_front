import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import { navigation, navigate } from "react-navigation";


export default class HeaderComponent extends Component {

    hello(){
        console.log('hello');
    }
    render() {
        return (
            <View style = {styles.HeaderComponent}>
                
                <TouchableOpacity onPress={this.props.drawer}>
                <Text>Drawer</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ this.props.home}>
                <Text>Picore</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.login}>
                <Text>Login</Text>
                </TouchableOpacity>
                
            </View>
        )
    }

}
const styles = StyleSheet.create({
    HeaderComponent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor : "red",
        paddingTop: 30,
        justifyContent : 'space-around'
    },
    text : {
        fontWeight: 'bold'
    }
});
