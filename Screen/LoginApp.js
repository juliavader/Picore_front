import React, { Component } from 'react'
import { View, TextInput, ActivityIndicator, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "./styles/Loginstyles";
import colors from "./styles/colors";


export default class LoginApp extends Component {
    
    


    handleSubmit() { 
        this.props.user.disabled = true 
        this.props.LoginUser(this.state.username, this.state.password);
    }
    



    render() {
        let ButtonSend
        if(this.props.user.disabled == false){
            ButtonSend = <Text style= {styles.ButtonSendTitle} >Se connecter</Text>
                        
        }else{
            ButtonSend = <ActivityIndicator size="small" color={colors.white} style={{paddingTop : 10}} />          
        }

        return (
            <ImageBackground 
                style={styles.backgroundLogin}
                source={require('../assets/images/background_clear.png')}
                resizeMode='contain'
                >
                <View style={ styles.headerLogin}>
                    
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={styles.registerButton}>
                        <Text style = {styles.registerButtonText}>S'inscrire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity   onPress= {()=>this.props.navigation.goBack()}> 
                        <Image 
                        style={styles.goBackTouch}
                        source={require('../assets/images/goBack.png')}

                        />
                    </TouchableOpacity>

                </View>
                <View style= {{alignItems : 'center', flex : 5}}>
                    <Image 
                            style={styles.Image}
                            source={require('../assets/images/happy_picore.png')}
                            resizeMode='contain'
                            />
                    <Text style={styles.title} >Connecte-Toi ! </Text>
                </View>
                <View style= {{flex: 6, alignItems : 'center'}}>
                    
                    <TextInput placeholder ="Pseudo" placeholderTextColor = {colors.red}  onChangeText={(name)=>this.setState({username: name}) }   autoCapitalize='none' style={styles.Input} />
                    <TextInput placeholder = "Mot de passe" placeholderTextColor = {colors.red} secureTextEntry={true} onChangeText={(password)=>this.setState({password: password})}  style={styles.Input} autoCapitalize='none' />
                    <TouchableOpacity onPress={()=>this.handleSubmit()} style={styles.ButtonSend}>
                        { ButtonSend }
                    </TouchableOpacity>
                    
                </View>
                

            </ImageBackground>
        )
    }
}
