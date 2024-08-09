import { KeyboardAvoidingView,Text, View, ScrollView, TouchableOpacity } from "react-native";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import login_style from "./Login_Page_Style";


interface Props {
    contact_number : string;
    email : string;
    
}

const LoginPage : React.FC<Props> = ({ contact_number, email}) => {

    const navigation = useNavigation();
    return (
    
            <View style = {login_style.container}>
                
                <View style = {login_style.formContainer}>
                    <Text style = {login_style.login_heading_text}>LOGIN</Text>
                    <TextField secure = {false} placeholder="USERNAME OR EMAIL" />
                    <TextField secure = {true} placeholder="PASSWORD" />
                    <Button title="Submit" onPress={() =>  navigation.navigate('Drawer' as never)} />

                    <TouchableOpacity onPress={() => navigation.navigate('Forgot_password' as never)}>
                        <Text  style={login_style.forgot_password}>Forgot Password?</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MPIN_Login' as never)}>
                        <Text  style={login_style.OTPLogin}>Login With MPIN</Text>
                    </TouchableOpacity>

                    <View style = {{marginTop:60, alignItems : "center"}}>
                        <Text style = {login_style.login_heading_text}>Help and Support </Text>
                        <Text style = {{color : 'red', fontSize : 15}}>Contact Number : {contact_number}</Text>
                        <Text style = {{color : 'red', fontSize : 15}}>Email : {email}</Text>  

                                                                                   
                    </View>

                    

                    {/* <View style = {login_style.bootomView}>
                        <Text style = {login_style.text}>Help and Support </Text>
                        <Text style = {{color : 'white', fontSize : 20}}>Contact Number : {contact_number}</Text>
                        <Text style = {{color : 'white', fontSize : 20}}>Email : {email}</Text>
                    </View>  */}
                </View>

                

                
                {/* <View style = {login_style.bootomView}>
                    <Text style = {login_style.text}>Help and Support </Text>
                    <Text style = {{color : 'white', fontSize : 20}}>Contact Number : {contact_number}</Text>
                    <Text style = {{color : 'white', fontSize : 20}}>Email : {email}</Text>
                </View> */}

                
            
            </View>
            
    );
}

export default LoginPage;