import React, { Component } from 'react'
import {View, Text} from "react-native";


export default class DetailsFavoriteApp extends Component { 

    render() {
        
        return (
        <View>
            <Text>{this.props.navigation.getParam('title')}</Text>
            <Text>{this.props.navigation.getParam('description')}</Text>
            {}
        </View>
        )
    }
}
