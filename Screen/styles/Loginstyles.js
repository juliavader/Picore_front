import React, {StyleSheet} from 'react-native'
import colors from "./colors";




export default StyleSheet.create({
    backgroundLogin : {
        flex: 1,
        backgroundColor: colors.backgroundBeige, 
        paddingTop: 30,
    },
    title:{
        color: colors.red,
        fontFamily: 'GrandHotel-Regular',
        fontSize : 35, 
        marginTop : 20

    },
    registerButton : {
        
        color: colors.orange,
        backgroundColor : colors.white,
        borderRadius : 20,
        width : '40%',
        height : "80%"
    },
    registerButtonText : {
        textAlign : 'center',
        fontFamily : 'GrandHotel-Regular',
        fontSize : 25,
        paddingTop : 5,
        color : colors.red
    },
    headerLogin : {
        flex: 1, 
        flexDirection: 'row', 
        padding :  15,
        marginLeft : 25,  
        marginRight : 25,  
        justifyContent : 'space-between'
    },
    
    goBackTouch: {
        width: 25, 
        height : 25,
        marginTop : 10
    }, 
    Image: {
        width : '60%',
        height : '60%',
    }, 
    ImageRegister:{
        width : '50%',
        height : '50%',
    },
    Input:{
        backgroundColor : colors.white,
        width : '70%',
        borderRadius : 50,
        height : 40, 
        textAlign : 'center', 
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 25, 
        color : colors.red, 
        marginBottom : 30
    }, 
    ButtonSend : {
        backgroundColor : colors.red,
        borderRadius : 50,
        height : 40,
        width : '50%',
        
    },
    ButtonSendTitle:{
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 25, 
        color : colors.white, 
        textAlign : 'center'
        
    }, 
    inputRegister:{
        marginBottom : 20
    }
    
});