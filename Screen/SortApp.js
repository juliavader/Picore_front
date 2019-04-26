import React, { Component } from 'react'
import { View, TextInput, Button,Picker } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SortApp extends Component {

    componentWillMount(){
        this.props.Idea.categories
        this.setState({ choosen: false })
    }

    handlePress(){

        if(this.state.selectedCat && this.state.selectedSubCat){
            this.props.GetIdeasWithTwoSpecification(parseInt(this.state.selectedCat), parseInt(this.state.selectedSubCat))
            setTimeout(()=>{ this.props.navigation.navigate('Home') }, 500 );
        }else{
            this.props.GetIdeasWithOneSpecification(this.state.selectedCat)
            setTimeout(()=>{ this.props.navigation.navigate('Home') }, 500 );
        }

    }
    

    render() {
        console.log(this.state)

        let tab = []
        let valuePicker

        if (this.state == null){
            valuePicker =  "Categories"
            valueSubPicker = "SubCategories"
        } else{
            valuePicker = this.state.selectedCat
            valueSubPicker = this.state.selectedSubCat
        }

        let subPicker
        
    

        
        if( this.props.Idea.subcategories != undefined && this.state.choosen ==true ){
            
            this.props.Idea.subcategories.map(subcat =>{
                if(subcat != null){
                    subPicker = <Picker selectedValue={valueSubPicker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedSubCat: itemValue })
                    }>
                    <Picker.Item label= "Subcategories" value="none" />
                    { 
                        this.props.Idea.subcategories.map((subCategories, index) =>(
                        <Picker.Item label={subCategories.c_name} value={subCategories.c_id} key={index} />
                            ))
                    }
                </Picker>
                }
            }
    
            )}
        
        return (
            
        <View style={{flex: 1}}>
            <Button
                title= "go back"
                onPress= {()=>this.props.navigation.goBack()}
            />

            <Picker selectedValue={valuePicker}
                onValueChange={(itemValue, itemIndex) =>{
                    this.setState({ selectedCat: itemValue, choosen: true })
                    this.props.GetAllSubCategories(itemIndex)
                }
                    
                }>
                <Picker.Item label= "categories" value="none" />
                {
                    this.props.Idea.categories.map((categories, index) =>(
                    <Picker.Item label={categories.c_name} value={categories.c_id} key={index} />
                        ))
                }
            </Picker>
            
            {
                subPicker
            }
            
            <Button
                title= "sort this out "
                onPress= {()=>this.handlePress()}
            />
        </View>
        )
    }
    
}