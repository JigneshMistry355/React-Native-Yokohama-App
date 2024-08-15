import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/Login";
import DrawerNavigator from "./DrawerNavigator";
import MPinLoginScreen from "../../screens/MPinLoginScreen/MPinLoginScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import WarrantyRegistrationForm from "../../screens/RegistrationScreen/RegistrationScreen";
import Dashboard from "../../screens/DashboardScreen/DashboardScreen";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: {Name : string};
  Drawer: {Name : string};
  MPIN_Login: undefined;
  Forgot_password: undefined;
  Registration: undefined;
  Dashboard: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type ScreenProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, RouteName>;



const StackBox:React.FC = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
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

