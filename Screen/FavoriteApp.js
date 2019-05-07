import React, { Component } from 'react'
import { View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles/Favoritesstyles.js";
import HeaderComponent from "./Component/HeaderComponent";
import colors from './styles/colors.js';
export default class FavoriteApp extends Component {
    


    ContentFavorites() {
        return this.props.user.favorites.map(function(favorite, i){
            return(
            <TouchableOpacity key={i} style ={styles.FavoriteIdea} onPress={()=>this.props.navigation.navigate('DetailsFavorite', {
                title : favorite.name, 
                description : favorite.description,
                compagnies : favorite.exCompanies,
                images : favorite.exImages,
                urls: favorite.exUrls
            })}>
                <Text style = {[styles.Title, styles.FavoriteIdeaText]}>{favorite.name}</Text>
            </TouchableOpacity>
            );
        });
        }

    render() {
        console.log(" favorites =" + this.props.user.favorites) 
        
        return (
        <View style= {{flex: 1,  backgroundColor : colors.backgroundBeige}}>
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
            
            <ImageBackground 
                source={require('../assets/images/background_clear.png')}
                style={styles.ImageBackground}
                resizeMode='contain'
            >
            <Text style = {styles.Title}>Favorites !</Text>
            {this.ContentFavorites()}
            </ImageBackground>
            
        </View>
        )
    }
}
