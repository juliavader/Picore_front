import React, {StyleSheet} from 'react-native'
import colors from "./colors";




export default StyleSheet.create({

    ImageBackground : {
        flex : 7, 
        backgroundColor : colors.backgroundBeige, 
        width : '100%', 
        alignItems : 'center', 
        paddingTop : 30, 
    }, 
    Title : {
        color : colors.red,
        fontFamily : 'GrandHotel-Regular',
        fontSize : 40,  
        paddingBottom : 30, 
    }, 
    FavoriteIdea : {
        backgroundColor : colors.beige,
        padding : 15, 
        width : 300,
        marginBottom : 25,
        borderRadius : 30,
    }, 
    FavoriteIdeaText : {
        fontSize : 20, 
        paddingBottom : 0,
        textAlign : 'center'
    }


});