import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import Logout from '../../screens/Logout';
import MPinLoginScreen from '../../screens/MPinLoginScreen/MPinLoginScreen';
import { RootStackParamList } from './StackBox';
import { RouteProp } from "@react-navigation/native";

type DrawerNavigatorProps = {
  route: RouteProp<RootStackParamList, 'Drawer'>;
};

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({route}) => {
  const  { Name } = route.params;
    return (          
            <Drawer.Navigator 
              initialRouteName="DrawerHome"
              screenOptions={{
              drawerActiveBackgroundColor : 'red', 
              drawerStyle : {backgroundColor:'#252525'},
              drawerLabelStyle : {color : 'white', fontSize : 18},
              drawerActiveTintColor : 'white',
              drawerItemStyle : {marginHorizontal:5},                                 
            }}>
                <Drawer.Screen  name='DrawerHome' 
                                component={HomeScreen} 
                                options={{
                                      // headerShown : false,  --> setting it to "true" will remove the drawer from this page
                                      headerTintColor : 'white', 
                                      title : Name.toUpperCase(),
                                      headerStyle : {backgroundColor : 'black'},  
                                      drawerIcon : ({focused , color, size}) => (
                                        <IconM 
                                            name = "account" 
                                            size={30} color="white" 
                                            style={
                                              { alignItems:"center",
                                                marginRight:6,
                                                paddingLeft:2, 
                                                width:'10%', 
                                                justifyContent:'center' 
                                              }
                                            } /> 
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
                                        <IconFont5 
                                          name = "mobile" 
                                          size={30} color="white" 
                                          style={
                                            { alignItems:"center",
                                              marginRight:6,
                                              paddingLeft:8, 
                                              width:'10%', 
                                              justifyContent:'center', 
                                            }
                                          }/> 
                                      )
                                      }} />
                
                

                <Drawer.Screen name='DrawerLogout' 
                              component={Logout} 
                              options={{
                                    title:'LOGOUT',
                                    headerShown : false,
                                    drawerIcon : ({focused, color, size}) => (
                                      <IconM 
                                        name = "logout" 
                                        size={30} 
                                        color="white" 
                                        style={
                                          { alignItems:"center",
                                            marginRight:6,
                                            paddingLeft:5, 
                                            width:'10%', 
                                            justifyContent:'center' 
                                          }
                                        }/> 
                                    ),
                                    
                                    }} /> 

          </Drawer.Navigator>
          
      
    );
};

export default DrawerNavigator;