import React from "react";
import { StyleSheet,View,Text, TextInput } from "react-native";
// TODO
const CustomButton = ({placeholder}) =>{
    return(
        <View style = {styles.mainCont}>
            <TextInput style={styles.text}
            placeholder={placeholder}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCont:{
        height:68
    },
    text:{
        borderWidth:1,
        width:300,
        borderBlockColor:"grey",
        borderRadius:10,
        paddingHorizontal:10
    }
}) 



export default CustomButton