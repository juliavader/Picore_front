import React, { Component } from 'react'
import { View, TextInput, Button,Picker, ImageBackground, Image  } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles/SortStyle";

export default class SortApp extends Component {

    componentWillMount(){
        this.setState({ choosen: false })
    }

    handlePress(){

        if(this.state.selectedCat && this.state.selectedSubCat){
            this.props.DeleteSpecifications()
            this.props.GetIdeasWithTwoSpecification(parseInt(this.state.selectedCat), parseInt(this.state.selectedSubCat))

        }else{
            this.props.DeleteSpecifications()
            this.props.GetIdeasWithOneSpecification(this.state.selectedCat)
            
        }

    }
    

    render() {
        

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
                    }
                    style = {styles.picker}
                    >
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
            
            <ImageBackground 
                style={styles.backgroundLogin}
                source={require('../assets/images/background_dark.png')}
                resizeMode='contain'
            >

            <TouchableOpacity onPress= {()=>this.props.navigation.goBack()} style= {{alignItems : 'flex-end'}}> 
                <Image 
                style={styles.goBackTouch}
                source={require('../assets/images/goBack_clear.png')}
                resizeMode = 'contain'
                />
            </TouchableOpacity>

            <View style= {{flex: 7, alignItems : 'center'}}>
                <Picker selectedValue={valuePicker}
                onValueChange={(itemValue, itemIndex) =>{
                    this.setState({ selectedCat: itemValue, choosen: true })
                    this.props.GetAllSubCategories(itemIndex)
                }}
                
                style = {styles.picker}>
                    <Picker.Item label= "categories" value="none" style = {{width: "70%"}} itemTextStyle= {{
                        fontFamily: 'GrandHotel-Regular', 
                        color : 'red'
                    }}  />
                    {
                        this.props.Idea.categories.map((categories, index) =>(
                        <Picker.Item label={categories.c_name} value={categories.c_id} key={index} />
                            ))
                    }
                </Picker>
            
                {
                    subPicker
                }
            </View>
            <Button
                title= "sort this out "
                onPress= {()=>this.handlePress()}
            />
        </ImageBackground >
        )
        
    }
    
}