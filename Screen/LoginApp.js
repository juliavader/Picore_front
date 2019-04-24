import React, { Component } from 'react'
import { View, TextInput, Button, Text } from "react-native";
import HeaderComponent from "./Component/HeaderComponent";


export default class LoginApp extends Component {
    
    

    handleSubmit() { 
        
        this.props.LoginUser(this.state.username, this.state.password);
        this.state.username = ''
        this.state.password = ''
        console.log(this.state)
        

    }
    
    render() {
        
        const { navigate } = this.props.navigation;
        let loggedIn;
        if (this.props.user.UserToken == undefined){
            loggedIn = <View><Text>user is NOT connected</Text></View>
        }else{
            setTimeout(()=>{ navigate('Home') }, 500);
            }
                
        return (
            <View style={{flex: 1}}>

                <HeaderComponent
                    login={()=>this.props.navigation.navigate('Login')}
                    home={()=>this.props.navigation.navigate('Home')}
                    drawer={()=>this.props.navigation.toggleDrawer()}
                />
                <View style= {{flex: 4}}>
                <TextInput placeholder ="nom" onChangeText={(name)=>this.setState({username: name}) }   autoCapitalize='none' />
                <TextInput placeholder = "mot de passe" onChangeText={(password)=>this.setState({password: password})}   autoCapitalize='none' />
                <Button title="Se connecter" 
                onPress = {()=>this.handleSubmit()}/>
                
                {loggedIn}
                </View>
                

            </View>
        )
    }
}
