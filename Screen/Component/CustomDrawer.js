import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from "react-native";


export default class CustomDrawerContentComponent extends Component {
    render() {
        let UserToken = this.props.user.UserToken
        let UserIsConnected
        if(UserToken != undefined){
            UserIsConnected = <View>
                                <Text> Favorites</Text>
                                <Text> Add an Idea</Text>
                                <Text> Pay</Text>
                            </View>
        }else {
            UserIsConnected = <View>
                                <Text> Home</Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                                    <Text>Login</Text>
                                </TouchableOpacity>
                                <Text> Register</Text>
                            </View>
        }

        return (
        
            UserIsConnected

        )
    }
}
