import React, { Component } from 'react'
import {View, Text, Button} from "react-native";
import HeaderComponent from "./Component/HeaderComponent";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeApp extends Component {
    
    componentWillMount() {
        this.props.getAllCategories();
    }
    

    handlePress(){
        this.props.randomIdea()
    }
    handleSort(){
        this.props.navigation.navigate('Sort') 
    }
    moreDetails(){
        this.props.navigation.navigate('Details')
    }
    
    
    render() {
        
        let random = this.props.Idea.randomIdea
        let specificIdea = this.props.Idea.specificIdea

        let idea;
        let getIdea;


        if(specificIdea == undefined){
            if (random != undefined){
                idea = <TouchableOpacity onPress ={()=>this.moreDetails()}><Text>{random.name}</Text></TouchableOpacity>
            }else {
                getIdea = <View>
                    <Button         
                    title= 'random idea'
                    onPress= {()=>this.handlePress()}
                    />
                </View>
            }
        }else{
            idea = specificIdea.map((idea, index) =>(
                    <TouchableOpacity onPress ={()=>this.moreDetails()} key={index} ><Text > {idea.i_name}</Text></TouchableOpacity>
                        ))
        }
    

        return (
            <View style={{flex: 1}}>
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
                <View  style = {{flex: 4}}>
                    {idea}
                    {getIdea}                    
                </View>
                <View  style = {{flex: 1}}>
                    <Button
                    title='Sort this out '
                    onPress= {()=> this.handleSort()}/>                    
                </View>
                
            </View>
        )
    }
}
