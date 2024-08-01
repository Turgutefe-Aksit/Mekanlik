import React from "react";
import { StyleSheet,View,Text, TextInput, Image,Button, ImageBackground } from "react-native";
import InputBox from "../components/InputBox";
import Icon from 'react-native-vector-icons/FontAwesome';


const TabBar = () =>{
    return(
        <View style={styles.mainCont} >
            <Icon name='bars' size={30} color="black" />
            <Icon name='user-circle' size={30} color="black" />
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    mainCont:{
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        
    }
    
}) 



export default TabBar