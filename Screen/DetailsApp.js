import React, { Component } from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image, ScrollView} from "react-native";
import stylesDetail from "./styles/Detailstyle";
import styles from "./styles/Drawerstyles";

export default class DetailsApp extends Component {
    
    
    render() {
        let ideaSpec
        
        if(this.props.Idea.specificIdea != undefined || this.props.Idea.twospecificIdea != undefined){
            if(this.props.Idea.specificIdea != undefined){
                ideaSpec = this.props.Idea.specificIdea
            }else{
                ideaSpec = this.props.Idea.twospecificIdea
            }
            

            data =<View  style = {{flex: 7}}>

            <Text style = {stylesDetail.title}>{ideaSpec.i_name}</Text>
            <View style = {stylesDetail.ContentContainer}>
                <ScrollView
                    showsHorizontalScrollIndicator ='false'
                >
                    <Text style= {[stylesDetail.title, stylesDetail.ContentTitle]} >Description :</Text>
                    <Text style = {stylesDetail.ContentText}>{ideaSpec.i_description}</Text>
                </ScrollView>
            </View>
        </View> 

            
        } else{
            ideaSpec = this.props.Idea.randomIdea
            if(ideaSpec.exCompanies){
                
                compagnies = ideaSpec.exCompanies.map((idea, index)=>(
                    <Text key={index} style ={stylesDetail.ContentText}>{idea.name}</Text>
                ))
                if(compagnies.length > 0){
                    compagniesTitle = <Text style= {stylesDetail.ContentTitle}>Exemple D'entreprises</Text>
                }else{
                    compagniesTitle = <Text> </Text>
                }
            }
            if(ideaSpec.exImages ){
                
                images= ideaSpec.exImages.map((idea, index)=>(
                    <Text key={index} style ={stylesDetail.ContentText}>{idea.name}</Text>
                ))

                if(images.length > 0){
                    ImagesTitle = <Text style= {stylesDetail.ContentTitle} >Exemple d'images</Text>
                }else{
                    ImagesTitle = <Text> </Text>
                }
                
            }
        
            if(ideaSpec.exUrls){
                
                url = ideaSpec.exUrls.map((idea, index)=>(
                    <Text key={index} style ={stylesDetail.ContentText}>{idea.name}</Text>
                ))
                if(url.length > 0){
                    urlsTitle = <Text style= { stylesDetail.ContentTitle}>Exemple d'urls</Text>
                }else{
                    urlsTitle = <Text> </Text>
                }
                
            }

            data = <View  style = {{flex: 7}}>

                <Text style = {stylesDetail.title}>{ideaSpec.name}</Text>
                <View style = {stylesDetail.ContentContainer}>
                    <ScrollView
                        showsHorizontalScrollIndicator ='false'

                    >
                        <Text style= {[stylesDetail.title, stylesDetail.ContentTitle]} >Description :</Text>
                        <Text style = {stylesDetail.ContentText}>{ideaSpec.description}</Text>
                        {compagniesTitle}
                        {compagnies}
                        {ImagesTitle}
                        {images}
                        {urlsTitle}
                        {url}
                        
                    </ScrollView>
                </View>
            </View> 
        
        }
        console.log(this.props);
        
        return (


            <ImageBackground 
                source={require('../assets/images/background_Idea.png')}
                style= {stylesDetail.backgroundDetails}
                resizeMode='contain'
                >

                <TouchableOpacity  style = {styles.goBackTouchable} onPress= {()=>this.props.navigation.goBack()}> 
                    <Image 
                    style = {[styles.goBack, stylesDetail.goBack]}
                    source={require('../assets/images/goBack.png')}
                    />
                </TouchableOpacity>
                
                    {data}
            </ImageBackground> 
        )
    }
}
