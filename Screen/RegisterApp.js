import React, { Component } from 'react'
import { View, TextInput, Text, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import styles from "./styles/Loginstyles";
import colors from "./styles/colors";


export default class RegisterApp extends Component {
    
    handleSubmit() {
        this.props.registerAndLoginUser(this.state.username, this.state.email,this.state.password)
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
                    
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.registerButton}>
                        <Text style = {styles.registerButtonText}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity   onPress= {()=>this.props.navigation.goBack()}> 
                        <Image 
                        style={styles.goBackTouch}
                        source={require('../assets/images/goBack.png')}

                        />
                    </TouchableOpacity>

                </View>
                <View style= {{alignItems : 'center', flex : 4}}>
                    <Image 
                            style={styles.ImageRegister}
                            source={require('../assets/images/inscription.png')}
                            resizeMode='contain'
                            />
                    <Text style={styles.title} >Inscris-Toi ! </Text>
                </View>
                <View style= {{flex: 6, alignItems: 'center'}}>
                    <TextInput placeholder ="Pseudo" placeholderTextColor = {colors.red} onChangeText={(name)=>this.setState({username: name}) }   autoCapitalize='none' style={[styles.Input, styles.inputRegister]} />
                    <TextInput placeholder ="Email"  placeholderTextColor = {colors.red} onChangeText={(email)=>this.setState({email: email}) }   autoCapitalize='none' style={[styles.Input, styles.inputRegister]} keyboardType = 'email-address' />
                    <TextInput placeholder = "Mot de passe" placeholderTextColor = {colors.red} secureTextEntry={true} onChangeText={(password)=>this.setState({password: password})} style={styles.Input}  autoCapitalize='none' />
                    <TouchableOpacity onPress={()=>this.handleSubmit()} style={styles.ButtonSend}>
                        { ButtonSend }
                    </TouchableOpacity>

                </View>
            

        </ImageBackground>
        )
    }
}
