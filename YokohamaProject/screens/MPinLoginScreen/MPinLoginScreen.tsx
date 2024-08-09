import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const MPinLoginScreen = () => {
  const [mpin, setMPin] = useState(['', '', '', '']);
  const navigation = useNavigation();

  const handleMPinChange = (text : string , index : number) => {
    const newMPin = [...mpin];
    newMPin[index] = text;
    setMPin(newMPin);
  };

  const handleMPinSubmit = async () => {
    const storedMPin = await AsyncStorage.getItem('mpin');
    if (storedMPin === mpin.join('')) {
      Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate('DrawerHome' as never);
    } else {
      Alert.alert('Invalid MPin', 'Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter Your M-Pin</Text>
      <View style={styles.mpinContainer}>
        {mpin.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.mpinInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleMPinChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleMPinSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


export default MPinLoginScreen;
