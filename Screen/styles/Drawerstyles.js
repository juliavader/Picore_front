import React, {StyleSheet} from 'react-native'
import colors from "./colors";




export default StyleSheet.create({

    backgroundDrawer: {
        backgroundColor: '#FDF0E3', 
        flex : 1,
        paddingTop: 30, 
        borderBottomRightRadius : 50, 
        borderTopRightRadius : 50, 

    }, 
    goBackTouchable: {
        flex: 1, 
        alignItems :'flex-end', 
        paddingRight : 32, 
        paddingTop: 15
    }, 
    titleDrawer: {
        flex: 2,
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 50, 
        color : colors.red, 
        textAlign : 'center'
    }, 
    goBack: {
        width : 20, 
        height : 20, 
        justifyContent : 'flex-end'
    }, 
    directions: {
        backgroundColor: '#FFE5CF', 
        borderTopRightRadius : 50,
        borderBottomRightRadius : 50,
        width : '90%',
        height : 15,
        flex: 1,
        flexDirection: 'row',
        paddingLeft : 20, 
        paddingTop : 5,
        marginBottom : 20, 
        justifyContent: 'flex-start'
        
    }, 
    directionsTitle: {
        fontFamily : 'GrandHotel-Regular',
        fontSize : 30, 
        textAlign: 'left',
        color : colors.red,
    }, 
    IconDirections: {
        height: 50, 
        width : 50, 
        marginRight : 20,  
        marginTop : '-5%'
        
    }
});