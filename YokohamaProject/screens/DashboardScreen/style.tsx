import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        
        flex : 1,
        backgroundColor : 'black',
        alignItems : 'center',
        // justifyContent : 'center',
    },

    headerTextContainer : {
        paddingVertical : 25,
    },

    headerText : {
        color : '#ff0000',
        fontWeight : 'bold',
        fontSize : 25,
        textDecorationLine : 'underline',
    },

    buttonContainer : {
        flexDirection : 'row',
        width : '85%',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    dateButtonStyle : {
        width : '45%',
    },

    searchButtonStyle : {
        width : '100%',
    }
});

export default style;