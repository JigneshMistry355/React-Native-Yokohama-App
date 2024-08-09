import * as React from 'react';
import Button from '../Button/Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../../screens/LoginScreen/Login';
import StackBox from './StackBox';
import Logout from '../../screens/Logout';
import MPinLoginScreen from '../../screens/MPinLoginScreen/MPinLoginScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
    return (
                              
          
            <Drawer.Navigator 
              initialRouteName="DrawerHome"
              screenOptions={{
              drawerActiveBackgroundColor : 'red', 
              drawerStyle : {backgroundColor:'black'},
              drawerLabelStyle : {color : 'white', fontSize : 18},
              drawerActiveTintColor : 'white',
                                              
            }}>

                <Drawer.Screen  name='DrawerHome' 
                                component={HomeScreen} 
                                options={{
                                    
                                      // headerShown : false,  --> setting it to "true" will remove the drawer from this page
                                      headerTintColor : 'white', 
                                      title : 'HOME',
                                      headerStyle : {backgroundColor : 'black'},   
                                      drawerIcon : ({focused , color, size}) => (
                                        <Icon name = "home" size={30} color="white" /> 
                                      )
                                      }} />
                
                <Drawer.Screen  name='mpin' 
                                component={MPinLoginScreen} 
                                options={{
                                      // headerShown : false,  --> setting it to "true" will remove the drawer from this page
                                      headerTintColor : 'white', 
                                      title : 'MPIN',
                                      headerStyle : {backgroundColor : 'black'},   
                                      drawerIcon : ({focused, color, size}) => (
                                        <Icon name = "home" size={30} color="white" /> 
                                      )
                                      }} />
                
                

                <Drawer.Screen name='DrawerLogout' 
                              component={Logout} 
                              options={{
                                    title:'LOGOUT',
                                    headerShown : false,
                                    drawerIcon : ({focused, color, size}) => (
                                      <IconM name = "logout" size={30} color="white" /> 
                                    ),
                                    
                                    }} /> 

          </Drawer.Navigator>
          
      
    );
};

export default DrawerNavigator;