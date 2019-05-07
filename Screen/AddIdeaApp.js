import React, { Component } from 'react'
import { View, TextInput, Button, Text, Picker } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImagePicker } from 'expo';

export default class AddIdeaApp extends Component {
    
    constructor(){
        super();
        this.state = {
            images : []
        }
    }
    
    async PickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        })

    
        filename = result.uri.split('/');
        filename = filename.slice(-1)[0];

        this.setState(state => ({
            images: [...state.images, filename]
            }))
        filename = null
    
    }

    handlePress(){
        this.props.addIdea(this.state.title, this.state.description, this.state.selectedCat, this.state.compagnies, this.state.images, this.state.urls, this.props.user.UserToken)
    }
    
    render() {
        let valuePicker
        if (this.state == null){
            valuePicker =  "Categories"
        } else{
            valuePicker = this.state.selectedCat 
        }

        return (
            <View style = {{paddingTop : 30}}>
                <TextInput placeholder ="titre" onChangeText={(name)=>this.setState({title: name}) }   autoCapitalize='none' />
                <TextInput placeholder = "description" multiline = {true}
                            numberOfLines = {4} onChangeText={(description)=>this.setState({description : description})}   autoCapitalize='none' />
                <Picker selectedValue={valuePicker}
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({ selectedCat: itemValue, choosen: true })
                        }}>

                    <Picker.Item label= "categories" value="none" />
                    {
                        this.props.Idea.categories.map((categories, index) =>(
                        <Picker.Item label={categories.c_name} value={categories.c_id} key={index} />
                            ))
                    }
                </Picker>


                <TextInput placeholder = "compagnies" onChangeText={(compagnies)=>{this.setState({compagnies : compagnies.split(',')})}}   autoCapitalize='none' />
                <TextInput placeholder = "Lien vers des sites web " onChangeText={(url)=>{this.setState({urls : url.split(',')})}}   autoCapitalize='none' />
                <Button
                    title= 'pick an image'
                    onPress = {()=>this.PickImage()}
                />

                <Button title="Se connecter" 
                    onPress = {()=>{console.log(this.state); this.handlePress();} }/>
            </View>
        )
    }
}