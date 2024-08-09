import { View, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import LoginPage from "../../components/Login/LoginPage";

const LoginScreen = () => {
    return (
        <View>

            <Header />

            <View>
                <LoginPage contact_number="+91 1256987456" email="help@gmail.com"/>
            </View>

        </View>
    );
}

export default LoginScreen;