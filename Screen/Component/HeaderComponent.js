import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import { navigation, navigate } from "react-navigation";
import styles from "../styles/styles";
export default class HeaderComponent extends Component {




    hello(){
        console.log('hello');
    }
    render() {
        return (
            <View style = {styles.HeaderStyle}>
                
                <TouchableOpacity onPress={this.props.drawer}>
                <Text>Drawer</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ this.props.home}>
                <Text style = {styles.grandhotel} >Picore</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.login}>
                <Text>Login</Text>
                </TouchableOpacity>
                
            </View>
        )
    }

}

