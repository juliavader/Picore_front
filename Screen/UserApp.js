import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from "react-native";
import HeaderComponent from "./Component/HeaderComponent";
import { TouchableOpacity } from 'react-native-gesture-handler';
import  styles  from "./styles/Profilestyle";


export default class UserApp extends Component {
    

    handleUnsubmit() { 
        this.props.UnlogUser();
        setTimeout(function(){ this.props.navigation.navigate('Home') }, 500);
    }

    render() {
        
        return (
            <View style = {{flex: 1 }}>
            
            {/* header */}
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

            {  /* content */}
                <View style= {{flex: 2,zIndex: 2, alignItems : 'center' }}>
                        <Image
                        source={require('../assets/images/imageProfile.png')}
                        style={styles.ImageBackground}
                        resizeMode='contain'
                        />
                        <ImageBackground
                        source={require('../assets/images/icons/creditEgg.png')}
                        style={styles.ImageCredit}
                        resizeMode='contain'
                        >
                        <Text style = {[styles.title, styles.credit]}>{this.props.user.credit}</Text>
                    </ImageBackground>
                </View>


            {  /* Presentation user */}
                <View style={[styles.backgroundProfile,{zIndex: 1, paddingTop : 20}]}>
                    
                    <View style= {{alignItems:'center', paddingTop: 30, flex: 1, marginBottom : 30}}>
                        <Text style = {styles.title}>{this.props.user.name}</Text>
                        <Text style = {[ styles.title, styles.Subtitle]}>{this.props.user.email}</Text>
                    </View>

                    {  /* Options user */}
                    <View style={[styles.optionsContainerBackground]}>
                        
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Favorites')} style = {styles.directions}>
                            <Image
                                style={styles.IconDirections}
                                resizeMode='contain'
                                source={require('../assets/images/icons/favorites.png')}
                            />
                            <Text style= {styles.directionsTitle} >Favorites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Favorites')} style = {styles.directions}>
                            <Image
                                style={styles.IconDirections}
                                resizeMode='contain'
                                source={require('../assets/images/icons/favorites.png')}
                            />
                            <Text style= {styles.directionsTitle} >Badges</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddIdea')} style = {styles.directions}>
                            <Image
                                style={styles.IconDirections}
                                resizeMode='contain'
                                source={require('../assets/images/icons/addIdea.png')}
                            />
                            <Text style= {styles.directionsTitle} >Ajouter une Idée</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={()=>this.handleUnsubmit()} style={styles.ButtonSend}>
                            <Text style={styles.ButtonSendTitle}>Se déconnecter</Text>
                        </TouchableOpacity>
                    
                    </View>

                </View>

            </View>
        )
    }
}
