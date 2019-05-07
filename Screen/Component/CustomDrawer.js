import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/Drawerstyles"

export default class CustomDrawerContentComponent extends Component {

    render() {

        let UserToken = this.props.user.UserToken
        let UserIsConnected
        if(UserToken != undefined){
            UserIsConnected = <View style = {styles.backgroundDrawer}>

                                <TouchableOpacity  style = {styles.goBackTouchable} onPress= {()=>this.props.navigation.goBack()}> 
                                    <Image 
                                    style = {styles.goBack}
                                    source={require('../../assets/images/goBack.png')}
                                    />
                                </TouchableOpacity>
                                
                                <Text style = {styles.titleDrawer}> Menu</Text>


                                <View style = {{flex: 6}}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style = {styles.directions}>
                                        
                                            <Image
                                                style={styles.IconDirections}
                                                resizeMode='contain'
                                                source={require('../../assets/images/icons/nest.png')}
                                            />
                                            <Text style={styles.directionsTitle} >Home</Text>
                                        
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Favorites')} style = {styles.directions}>
                                            <Image
                                                style={styles.IconDirections}
                                                resizeMode='contain'
                                                source={require('../../assets/images/icons/favorites.png')}
                                            />
                                        <Text style= {styles.directionsTitle} >Favorites</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddIdea')} style = {styles.directions}>
                                        <Image
                                            style={styles.IconDirections}
                                            resizeMode='contain'
                                            source={require('../../assets/images/icons/addIdea.png')}
                                        />
                                        <Text style = {styles.directionsTitle}>Add an idea</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style = {styles.directions}>
                                        <Image
                                            style={styles.IconDirections}
                                            resizeMode='contain'
                                            source={require('../../assets/images/icons/Credit.png')}
                                        />
                                        <Text style = {styles.directionsTitle}>Pay</Text>

                                    </TouchableOpacity>

                                    <View style= {{flex: 2}}></View>
                                </View>
                            </View>
        }else {
            UserIsConnected = <View style = {styles.backgroundDrawer}>

                                <TouchableOpacity  style = {styles.goBackTouchable} onPress= {()=>this.props.navigation.goBack()}> 
                                    <Image 
                                    style = {styles.goBack}
                                    source={require('../../assets/images/goBack.png')}
                                    />
                                </TouchableOpacity>
                                
                                <Text style = {styles.titleDrawer}> Menu</Text>

                                <View style = {{flex: 6}}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style = {styles.directions}>
                                        
                                            <Image
                                                style={styles.IconDirections}
                                                resizeMode='contain'
                                                source={require('../../assets/images/icons/nest.png')}
                                            />
                                                <Text style={styles.directionsTitle} >Home</Text>
                                        
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style = {styles.directions}>
                                            <Image
                                                style={styles.IconDirections}
                                                resizeMode='contain'
                                                source={require('../../assets/images/icons/paws.png')}
                                            />
                                        <Text style= {styles.directionsTitle} >Login</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style = {styles.directions}>
                                        <Image
                                            style={styles.IconDirections}
                                            resizeMode='contain'
                                            source={require('../../assets/images/icons/register.png')}
                                        />
                                        <Text style = {styles.directionsTitle}>Register</Text>
                                    </TouchableOpacity>
                                    <View style= {{flex: 3}}></View>
                                </View>
                                
                            </View>
        }

        return (
            <View style={styles.backgroundDrawer}>
                { UserIsConnected}
            </View>

        )
    }
}
