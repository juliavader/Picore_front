import React, {StyleSheet} from 'react-native'
import colors from "./colors";

export default StyleSheet.create({
    BackgroundHome : {
        backgroundColor : colors.orange
    },
    BackgroundStyle: {
        flex: 1,
    }, 
    BackgroundIdea: {
        backgroundColor : colors.orange
    }, 
    title_find_idea: {
        fontFamily : 'GrandHotel-Regular', 
        color : "#fff",
        fontSize : 70, 
        textAlign : 'center',
        paddingTop : 100

    }, 
    title_idea : {
        fontSize : 45,
        padding : 10,
        paddingTop : '30%',
        paddingBottom : '10%'
    },
    Button: {
        borderTopStartRadius: 30,   
        borderTopEndRadius: 30,
        backgroundColor : '#CE202F', 
    },
    ButtonSort : {
        borderTopStartRadius : 50, 
        borderTopEndRadius : 50,
        color : '#fff',
        fontSize: 30, 
        paddingTop: 10,  
        paddingBottom: 10,   
        textAlign: 'center',
        fontFamily : 'GrandHotel-Regular'
    },
    Favorites:{
        width : 50, 
        height : 50
    }, 
    title_favorites: {
        fontSize : 15,
        color : colors.red,
        paddingTop : 10
    }, 
    reloadContainer: {
        alignItems : 'flex-end', 
        paddingTop : 50, 
        paddingRight : 50
    },
    reload : {
        width : 40, 
        height : 40, 
    }
}); 