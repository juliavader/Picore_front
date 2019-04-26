import React, { Component } from 'react'
import { View, TextInput, Button } from "react-native";


export default class RegisterApp extends Component {
    
    handleSubmit() {
        this.props.registerAndLoginUser(this.state.username, this.state.email,this.state.password)
    }
    
    
    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1}}>

            <Button
                title= "Goback"
                onPress={()=>this.props.navigation.goBack()}
            />

            <Button
                title= "Se connecter"
                onPress={()=>this.props.navigation.navigate('Login')}
            />
            <View style= {{flex: 4}}>
            <TextInput placeholder ="nom" onChangeText={(name)=>this.setState({username: name}) }   autoCapitalize='none' />
            <TextInput placeholder ="email" onChangeText={(email)=>this.setState({email: email}) }   autoCapitalize='none' />
            <TextInput placeholder = "mot de passe" onChangeText={(password)=>this.setState({password: password})}   autoCapitalize='none' />
            <Button title="S'inscrire'" 
            onPress = {()=>this.handleSubmit()}/>
            </View>
            

        </View>
        )
    }
}
