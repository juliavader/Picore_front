import React, {StyleSheet} from 'react-native'
import colors from "./colors";

export default StyleSheet.create({

    backgroundDetails:{
        flex : 1, 
        backgroundColor : colors.orange, 
        paddingTop : 30
    }, 
    goBack :{
        width : 30, 
        height : 30
    }, 
    title: {
        fontFamily : 'GrandHotel-Regular', 
        color : colors.white, 
        fontSize: 40, 
        textAlign : 'center', 
        marginBottom : 30, 
        padding : 15,

    }, 
    ContentContainer: {
        flex: 1, 
        backgroundColor : colors.beige, 
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        padding : 30, 
        paddingTop: 50
    }, 
    ContentTitle : {
        fontFamily : 'GrandHotel-Regular',
        color : colors.red,
        fontSize: 25, 
        textAlign : 'left', 
        marginBottom : 0,
        paddingBottom : 10, 
        paddingTop :10

    }, 
    ContentText : {
        color: colors.red,
        fontFamily : 'OpenSans-Regular',
    }
})

