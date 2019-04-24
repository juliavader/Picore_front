import React, { Component } from 'react'
import { View, TextInput, Button, Text } from "react-native";
import HeaderComponent from "./Component/HeaderComponent";

export default class UserApp extends Component {


    handleUnsubmit() { 
        this.props.UnlogUser();
        setTimeout(function(){ this.props.navigation.navigate('Home') }, 500);
    }

    render() {
        console.log(this.props)
        return (
        <View style = {{flex : 1}}>
            <HeaderComponent
                    login={()=>{ 
                        if(this.props.user.UserToken != undefined){
                            this.props.navigation.navigate('Profile')
                        }else{
                            this.props.navigation.navigate('Login')}
                        }
                    }
                    home={()=>this.props.navigation.navigate('Home')}
                    drawer={()=>this.props.navigation.toggleDrawer()}
                />
            <View style={{flex:4}}>
            <Button title="Se déconnecter" 
                onPress = {()=>this.handleUnsubmit()}/>

            </View>
        </View>
        )
    }
}
