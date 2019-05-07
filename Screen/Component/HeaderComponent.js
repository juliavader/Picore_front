import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, Button } from "react-native";
import { navigation, navigate } from "react-navigation";
import styles from "../styles/Headerstyles";
import {Font } from 'expo'


export default class HeaderComponent extends Component {

        
    hello(){
        console.log('hello');
    }
    render() {
        return (
            <View style = {styles.HeaderStyle}>
                
                <TouchableOpacity onPress={this.props.drawer} style = {styles.touchableOpacity_icon_burger}>
                <Image
                style = {styles.icon_menu_hamburger}
                resizeMode='contain'
                source={require('../../assets/images/menu_hamburger.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ this.props.home}>

                <Text style = {styles.grandhotel} >Picore</Text>
                
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.login}>
                <Image
                style = {styles.icon_profile}
                resizeMode='contain'
                source={require('../../assets/images/profile.png')}/>
                </TouchableOpacity>
                
            </View>
        )
    }

}

