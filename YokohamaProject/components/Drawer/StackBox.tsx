import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/Login";
import DrawerNavigator from "./DrawerNavigator";
import MPinLoginScreen from "../../screens/MPinLoginScreen/MPinLoginScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import WarrantyRegistrationForm from "../../screens/RegistrationScreen/RegistrationScreen";
import Dashboard from "../../screens/DashboardScreen/DashboardScreen";

const StackBox:React.FC = () => {

    const Stack = createNativeStackNavigator();
    return (
     
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name = 'Login' component={LoginScreen} options={{headerShown:false}} />
                <Stack.Screen name = 'Drawer' component={DrawerNavigator}  options={{headerShown:false}}/>
                <Stack.Screen name = 'MPIN_Login' component={MPinLoginScreen}  options={{headerShown:false}}/>
                <Stack.Screen name = 'Forgot_password' component={ForgotPasswordScreen}  options={{headerShown:false}}/>
                <Stack.Screen name = 'Registration' component={WarrantyRegistrationForm} options={{headerShown:false}} />
                <Stack.Screen name = 'Dashboard' component={Dashboard} options={{headerShown:false}} />
            </Stack.Navigator>
     
        
    );
}

export default StackBox;

