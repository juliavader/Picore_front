import React, { Component } from 'react'
import { View, TextInput, Button,Picker } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SortApp extends Component {

    componentWillMount(){
        this.props.Idea.categories
    }

    handlePress(){
        this.props.GetIdeasWithOneSpecification(this.state.selectedCat)
        setTimeout(()=>{ this.props.navigation.navigate('Home') }, 500 );
    }
    

    render() {
        console.log(this.state)

        let valuePicker

        if (this.state == null){
            valuePicker =  "Categories"
        } else{
            valuePicker = this.state.selectedCat
        }

        

        return (
            
        <View style={{flex: 1}}>
            <Button
                title= "go back"
                onPress= {()=>this.props.navigation.goBack()}
            />

            <Picker selectedValue={valuePicker}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ selectedCat: itemValue })
                }>
                <Picker.Item label= "categories" value="none" />
                {
                    this.props.Idea.categories.map((categories, index) =>(
                    <Picker.Item label={categories.name} value={categories.id} key={index} />
                        ))
                }
            </Picker>

            <Button
                title= "sort this out "
                onPress= {()=>this.handlePress()}
            />
        </View>
        )
    }
    
}
