import { KeyboardAvoidingView,Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import login_style from "./Login_Page_Style";
import Header from "../../components/Header/Header";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from './../../components/Drawer/StackBox';

interface LoginDetails {
    username : string;
    mobileNumber : string;
    password : string;
}

type LoginScreenProps = {
    navigation: NavigationProp<RootStackParamList, 'Drawer'>;
  };

const LoginScreen:React.FC<LoginScreenProps>  = ({navigation}) => {

    navigation = useNavigation();

    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        username : '',
        mobileNumber : '',
        password : ''
    });

    const handleLoginDetailsChange = (field : keyof LoginDetails, value : string) => {
        // console.log(`Changing ${field} to ${value}`);
        setLoginDetails((prevState) => (
            {
                ...prevState,
                [field] : value
            }
        ));
    }

    const handleLogin = () => {

        if (loginDetails.username.trimStart() && loginDetails.password.trimStart() !== '') {
            console.log("Username : ",loginDetails.username);
        console.log("Password : ",loginDetails.password);
        
        navigation.navigate('Drawer', {Name:loginDetails.username});

        setLoginDetails({
            username : '',
            mobileNumber : '',
            password : '',
        });
        return;
        }  

        Alert.alert("Enter your credentials..!!");

    }

    const contact_number = '+91 9004557869';
    const email = 'example@gmail.com';
    return (
    
            <View style = {login_style.container}>

                <Header />
                
                <View style = {login_style.formContainer}>
                    <Text style = {login_style.login_heading_text}>LOGIN</Text>
                    <TextField 
                        secure = {false} 
                        placeholder="USERNAME OR EMAIL" 
                        onChangeText={(value : string) => handleLoginDetailsChange('username', value)}
                        value = {loginDetails.username.toString()}
                        />
                    <TextField 
                        secure = {true} 
                        placeholder="PASSWORD" 
                        onChangeText={(value : string) => handleLoginDetailsChange('password', value)}
                        value={loginDetails.password.toString()}
                        />
                    <Button title="Submit" onPress={handleLogin} />

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

export default LoginScreen;