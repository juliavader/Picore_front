import React, { Component } from 'react'
import {View, Text, Image, ImageBackground, ScrollView} from "react-native";
import HeaderComponent from "./Component/HeaderComponent";
import { TouchableOpacity } from 'react-native-gesture-handler';
import  styles  from "./styles/HomeStyles";

export default class HomeApp extends Component {

    componentWillMount() {
        this.props.getAllCategories();
        this.setState({addFavorite : false})
    }
   
    
    handlePress(){
        this.setState({addFavorite : false})
        if(this.props.Idea.specificIdea == undefined && this.props.Idea.twospecificIdea == undefined ){
            if (this.props.Idea.randomIdea != undefined){
                this.props.randomIdea()
            }
        }else{
            if(this.props.Idea.specificIdea != undefined){
                this.props.GetIdeasWithOneSpecification(this.props.Idea.selectedCat)
            }
            if(this.props.Idea.twospecificIdea != undefined){
            
                // this.props.GetIdeasWithOneSpecification(this.props.Idea.selectedCat)
            }
        }
        
    }
    handleSort(){
        this.props.navigation.navigate('Sort') 
    }
    handleFavorites(){
        if(this.props.user.UserToken == undefined){
            this.props.navigation.navigate('Login')
        }else {
            this.props.addFavoriteIdea(this.props.Idea.randomIdea.id, this.props.user.userId)
        }
    }
    moreDetails(){
        this.props.navigation.navigate('Details')
    }
    
    
    render() {
        let backgroundHome
        let contentHome
        let random = this.props.Idea.randomIdea
        let specificIdea = this.props.Idea.specificIdea
        let twospecificIdea = this.props.Idea.twospecificIdea
        let addFavorite
        let idea;
        let getIdea;
        let ideaContent;

// add idea to favorites
        

        if(this.props.user.addFavorite == true ){
            addFavorite = <TouchableOpacity onPress ={()=>this.handleFavorites()} style= {{alignItems :"center"}} >
                            <Image
                            source={require('../assets/images/icons/HomeFavorite.png')}
                            style= {styles.Favorites}
                            resizeMode='contain'
                            />
                            <Text style = {[styles.title_find_idea, styles.title_favorites]}>Idée rajoutée aux favoris ! </Text>
                        </TouchableOpacity>

        } else {
            addFavorite = <TouchableOpacity onPress ={()=>this.handleFavorites()} >
                            <Image
                            source={require('../assets/images/icons/HomeAddFavorite.png')}
                            style= {styles.Favorites}
                            resizeMode='contain'
                            />
                        </TouchableOpacity>
        }



// Show the Idea
        if(specificIdea == undefined && twospecificIdea == undefined){
            if (random != undefined){
                idea = <TouchableOpacity onPress ={()=>this.moreDetails()}>
                        <Text style={ [styles.title_find_idea, styles.title_idea]} >{random.name}</Text>
                        </TouchableOpacity>
            }else{
                idea = undefined;
            }
        }else{
            if(specificIdea != undefined){
                idea = <TouchableOpacity onPress ={()=>this.moreDetails()}  >
                    <Text style={ [styles.title_find_idea, styles.title_idea]}  > {specificIdea.i_name}</Text>
                    </TouchableOpacity>
            }else{
                idea = <TouchableOpacity onPress ={()=>this.moreDetails()}  >
                    <Text style={ [styles.title_find_idea, styles.title_idea]}  > {twospecificIdea.i_name}</Text>
                    </TouchableOpacity>
                
            }
            
        }
    

        // Idea 

        if(specificIdea == undefined && twospecificIdea == undefined){
            if (random != undefined){
                ideaContent = <View style ={{flex: 1}}>
                    <TouchableOpacity onPress = {()=>this.handlePress()} style = {styles.reloadContainer}>
                        <Image
                            source={require('../assets/images/icons/reload.png')}
                            style= {styles.reload}
                            resizeMode='contain'            
                        />
                    </TouchableOpacity>
                
                    <View style = {{flex: 3, alignItems : "center"}}>
                        
                        {idea}
                        {addFavorite}
                    </View>
                </View>
            }else {
                getIdea = <View style = {{flex: 1}}>
                            <TouchableOpacity onPress ={()=>this.handlePress()} >
                                <Text style = {styles.title_find_idea} >Trouve {"\n"} ton idée</Text>
                            </TouchableOpacity>
                        </View>
            }
        }else{
            ideaContent = <View style ={{flex: 1}}>
                    <TouchableOpacity onPress = {()=>this.handlePress()} style = {styles.reloadContainer}>
                        <Image
                            source={require('../assets/images/icons/reload.png')}
                            style= {styles.reload}
                            resizeMode='contain'            
                        />
                    </TouchableOpacity>
                
                    <View style = {{flex: 3, alignItems : "center"}}>
                        
                        {idea}
                        {addFavorite}
                    </View>
                </View>
        }

// Content of HomeApp
        contentHome = <View style ={{height : '100%'}}>
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
            
                            <View  style = {{flex: 7}}>
                            
                                {ideaContent}
                                {getIdea}  
                            </View>
                            
                            <View >
                                <TouchableOpacity onPress ={()=>this.handleSort()} style= {styles.Button} >
                                    <Text style = {styles.ButtonSort} >Affine ta recherche</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

        // BACKGROUND

        if(random == undefined && specificIdea == undefined && twospecificIdea == undefined ){
            backgroundHome = <ImageBackground 
                                source={require('../assets/images/background_home.png')}
                                style= {styles.BackgroundStyle}
                                resizeMode='contain'
                                >
                                    {contentHome}
                                </ImageBackground>

        }else {
            backgroundHome = <ImageBackground 
                                source={require('../assets/images/background_Idea.png')}
                                style= {[styles.BackgroundStyle, styles.BackgroundIdea]}
                                resizeMode='contain'
                                >
                                {contentHome}
                            </ImageBackground>
        }

        console.log(this.props.navigation.state.params)
        
    
        return (
            <View style={{flex: 1 }}>
                {backgroundHome}
            </View>
        )
    }
}
