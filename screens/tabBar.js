import React from "react";
import { StyleSheet,View,Text, TextInput, Image,Button, ImageBackground } from "react-native";
import InputBox from "../components/InputBox";
import Icon from 'react-native-vector-icons/FontAwesome';


const TabBar = () =>{
    return(
        <View style={styles.mainCont} >
            <Icon name="rocket" size={30} color="#900" />
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    mainCont:{
        padding:10
    }
    
}) 



export default TabBar