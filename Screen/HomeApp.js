import React, { Component } from 'react'
import {View, Text} from "react-native";
import HeaderComponent from "./Component/HeaderComponent";

export default class HomeApp extends Component {
    

    
    render() {

        return (
            <View style={{flex: 1}}>
                <HeaderComponent 
                login={()=>this.props.navigation.navigate('Login')}
                home={()=>this.props.navigation.navigate('Home')}
                drawer={()=>this.props.navigation.toggleDrawer()}
                />
                <View style= {{flex: 4}}>
                    <Text>This is the HomeApp</Text>
                </View>
            </View>
        )
    }
}
