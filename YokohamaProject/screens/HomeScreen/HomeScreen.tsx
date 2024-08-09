import { ImageBackground, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../components/Header/Header";



const HomeScreen : React.FC = () => {

    const navigation = useNavigation();
    const tractor_image = () => require('../../components/images/tractor_image.webp');

    const iconSize : number = 30;
    const cardIconColor : string = "white";
 
    return (
        
        <ScrollView style = {style.container}>
        

            <ImageBackground source={tractor_image()} resizeMode="cover">
                <View style = {style.tractor_Image_container}></View>
            </ImageBackground>

            <View style = {style.upper_card_container}>

                <Text style={style.warranty_count_header}>Warranty Count</Text>

                <View style = {style.cardGroup}>

                    <TouchableOpacity style = {style.text_card}>
                        <Text style = {style.text}>Today</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style = {style.text_card}>
                        <Text style = {style.text}>Monthly</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {style.text_card}>
                        <Text style = {style.text}>Overall</Text>
                    </TouchableOpacity>
                </View>

                <View style = {style.cardGroup}>

                    <TouchableOpacity style = {style.number_card}>
                        <Text style = {style.text}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {style.number_card}>
                        <Text style = {style.text}>21</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {style.number_card}>
                        <Text style = {style.text}>36</Text>
                    </TouchableOpacity>
                </View>
               
            </View>

            <View style = {style.lower_card_container}>

                <View style = {style.cardGroup}>
                    <TouchableOpacity style = {style.card} onPress={() => navigation.navigate('Registration' as never)}>
                        <Icon name = "wpforms" size={iconSize} color={cardIconColor} />
                        <Text style = {style.text}>Warranty Registration</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.card} onPress={() => navigation.navigate('Dashboard' as never)}>
                        <Icon name = "share-square-o" size={iconSize} color={cardIconColor} />
                        <Text style = {style.text}>Dashboard</Text>
                    </TouchableOpacity>  
                </View>

                <View style = {style.cardGroup}>
                    <TouchableOpacity style = {style.card} onPress={() => navigation.navigate('#' as never)}>
                        <Icon name = "search" size={iconSize} color={cardIconColor} />
                        <Text style = {style.text}>Missing Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.card} onPress={() => navigation.navigate('#' as never)}>
                        <Icon name = "line-chart" size={iconSize} color={cardIconColor} />
                        <Text style = {style.text}>Report</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
}

export default HomeScreen;