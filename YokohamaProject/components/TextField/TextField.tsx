import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import textfield_style from "./TextField_Style";


interface Props {
    secure : boolean;
    placeholder : string;
    onChangeText : any;
    value : string;
}

const TextField : React.FC<Props> = ({secure , placeholder, onChangeText, value} ) => {
    return (
        <SafeAreaView style = {textfield_style.container}>
            <TextInput 
                secureTextEntry = {secure} 
                placeholder={placeholder} 
                style={textfield_style.text}
                placeholderTextColor="white"
                onChangeText={onChangeText}
                value={value}
                />
        </SafeAreaView>
    );
}

export default TextField;