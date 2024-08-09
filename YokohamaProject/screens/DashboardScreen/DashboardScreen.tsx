import React from "react";
import { View, Text } from "react-native";
import TextField from "../../components/TextField/TextField";
import style from "./style";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Dashboard = () => {
    return (
    <>
        <Header />
        <View style={style.container}>
            <View style={style.headerTextContainer}>
                <Text style={style.headerText}>Dashboard</Text>
            </View>
            <TextField secure={false} placeholder="WARRANTY NUMBER" />
            <TextField secure={false} placeholder="MOBILE NUMBER" />
            <View style={style.buttonContainer}>
                <Button title="Date1" onPress={() => console.log("Date 1")} style={style.dateButtonStyle}/>
                <Button title="Date2" onPress={() => console.log("Date 2")} style={style.dateButtonStyle}/>
            </View>
            <View style={style.buttonContainer}>
                <Button title="Search" onPress={() => console.log("Search")} style={style.searchButtonStyle}/>             
            </View>
        </View>
        
    </>
);
}

export default Dashboard;