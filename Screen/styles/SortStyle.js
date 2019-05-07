import React, {StyleSheet} from 'react-native'
import colors from "./colors";

export default StyleSheet.create({

    backgroundLogin : {
        flex: 1,
        backgroundColor: colors.red, 
        paddingTop: 30,

    }, 
    goBackTouch: {
        width : 30, 
        height : 30, 
        marginRight : 30, 
    },
    picker : {
        
        backgroundColor : colors.beige, 
        width : '80%', 
        borderRadius: 50, 

    }
});
