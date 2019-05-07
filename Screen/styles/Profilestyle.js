import React, {StyleSheet} from 'react-native'
import colors from "./colors";

export default StyleSheet.create({

    backgroundProfile : {
        flex: 8,
        backgroundColor: colors.backgroundBeige, 
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    ImageBackground:{
        flex : 6,
        width: '100%',
        marginTop: 20,
        marginBottom: '-15%',
        
    },
    ImageCredit:{
        flex : 2,
        width: '40%',
        marginTop: 10,
        marginLeft: 180,
        textAlign : 'right',
        marginBottom: '-15%',
        
    },
    title:{
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 30,
        color : colors.red, 
    }, 
    Subtitle:{
        fontSize : 20,
    }, 
    credit: {
        paddingLeft: 25,
        paddingTop: 10,
        color : colors.white
    },
    optionsContainerBackground: {
        flex: 6,
        backgroundColor : colors.beige,
        borderTopLeftRadius : 50, 
        borderTopRightRadius : 50, 
        justifyContent : 'space-around', 
        width : '100%',
        alignItems : 'center',
        paddingTop : 20,
        paddingBottom : 20,
    },
    directions: {
        backgroundColor: '#FFE5CF', 
        borderRadius : 50,
        width : 250,
        height : 50,
        flexDirection: 'row', 
        paddingTop : 5, 
        padding : 5,
        justifyContent: 'flex-start'
        
    }, 
    directionsTitle: {
        fontFamily : 'GrandHotel-Regular',
        fontSize : 25, 
        textAlign: 'left',
        paddingTop : 6,
        color : colors.red,
    }, 
    IconDirections: {
        height: 40, 
        width : 40, 
        marginLeft : 30,
        marginRight : 20,
        
    }, 
    ButtonSend : {
        backgroundColor : colors.red,
        borderRadius : 50,
        height : 40,
        width : 180,
        
    },
    ButtonSendTitle:{
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 25, 
        color : colors.white, 
        textAlign : 'center'
        
    }, 
})