import React, { Component } from 'react'
import {View, Text, Button} from "react-native";


export default class DetailsApp extends Component {
    
    
    render() {
        let ideaSpec
        let name
        if(this.props.Idea.specificIdea != undefined){
            ideaSpec = this.props.Idea.specificIdea
            data = ideaSpec.map((idea, index) =>(
                <Text key={index} >{idea.i_name}</Text>
                    ))
            
        }else{
            ideaSpec = this.props.Idea.randomIdea
            data = (<Text>{ideaSpec.name}</Text>)
        }

        return (
            <View style={{flex: 1}}>
                <Button
                    title = 'go back '
                    onPress = {()=>{this.props.navigation.goBack()}}
                />
                <View  style = {{flex: 4}}>
                    {data}            
                </View>
                
            </View>
        )
    }
}
