
import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container : { flex : 1, backgroundColor : 'black' },

    tractor_Image_container : { height : 200 },
    
    upper_card_container : {alignItems : 'center', justifyContent : 'space-between', marginTop : 20},

    warranty_count_header : {color:'white', fontSize: 20},

    cardGroup : {

            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 2,
            marginTop : 10
            
            },

    text_card : {

            height : 70,
            width : '32.5%',
            backgroundColor : 'black',
            margin : 1,
            borderWidth : 2,
            borderRadius : 10,
            alignItems : 'center',
            justifyContent : 'center',
            borderColor : 'red',
            marginTop : 10

            },

    number_card : {

            height : 40,
            width : '32.5%',
            backgroundColor : 'black',
            marginTop : 0,
            margin : 1,
            borderWidth : 1,
            borderRadius : 10,
            alignItems : 'center',
            justifyContent : 'center',
            borderColor : 'red'

            },

    lower_card_container : {alignItems : 'center', marginTop : 25},
    

    text : { fontSize : 14, fontWeight : 'bold', color : 'white', margin : 5},
    
    card : {

            height : 110,
            width : '49%',
            backgroundColor : 'black',
            margin : 1,
            borderWidth : 2,
            borderRadius : 10,
            alignItems : 'center',
            justifyContent : 'center',
            padding : 30,
            borderColor : 'red'

            },
    
});

export default style;