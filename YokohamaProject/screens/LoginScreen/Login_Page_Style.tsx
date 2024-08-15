import { StyleSheet } from "react-native";

const login_style = StyleSheet.create({
    container : {
        // flex : 1,
        // flexDirection : 'column',
        height : '100%',
        backgroundColor : 'black',
        // alignItems : 'center',
        // paddingHorizontal : '10%'
        
    },
    formContainer : {
        height : '50%',
        width : '100%',
        // backgroundColor : 'bla',
        alignItems : 'center',
        paddingTop : 50
    },
    buttonContainer : {
        width : '75%',
        color : 'black'
    },
    forgot_password : {
        color : 'red',
        margin : 10
    },
    OTPLogin : {color : 'white', marginTop : 10},

    login_heading_text : {
        color : 'white',
        fontSize : 25,
        paddingBottom : 20

    },
    bootomView : {
        backgroundColor : 'red',
        position : 'relative',
        bottom : 0,
        width : '100%',
        paddingBottom : 20,
        marginTop : 180,
        marginVertical : 50,
        height : 150,
        
        
    }
});

export default login_style;