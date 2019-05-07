import React, {StyleSheet} from 'react-native'
import colors from "./colors";

export default StyleSheet.create({

    
    HeaderStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor : colors.beige,
        paddingTop: 35,
        paddingBottom: 10,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        justifyContent : 'space-around'
        },
    grandhotel:{
        fontFamily : 'GrandHotel-Regular', 
        fontSize : 43, 
        color : colors.lightOrange
    }, 
    touchableOpacity_icon_burger : {
        paddingTop: 15,
    },

    icon_menu_hamburger : {
        height : 35, 
        width : 35,
    },
    icon_profile : {
        height : 60, 
        width : 60
    }
});