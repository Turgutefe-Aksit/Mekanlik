import React from "react";
import { StyleSheet,View,Text, TextInput, Image,Button, ImageBackground } from "react-native";
import InputBox from "../components/InputBox";

const Post = ({name,km}) =>{
    return(
        <View style={styles.content}>
            <Text style={styles.name}>
                {name}
            </Text>

            
            <ImageBackground 
                source={require('../images/coffe.jpg')} 
                style={styles.backIMG}
                 
            >
                <Image style={styles.star} source={require('../images/transparan_star.png')} />
            </ImageBackground>

            <Text style={styles.km}>
                {km}
            </Text>
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    backIMG:{
        height:200
        
    },
    content:{
        marginTop:20,
        backgroundColor:'red'
    },
    star:{
        height:40,
        width:40,
        borderWidth:0.1,
        borderColor:"black",
        borderRadius:100,
        alignSelf:"flex-end",
        margin:15,
    },
    km:{
        alignSelf:"flex-end",
        padding: 15,
        color:'black',
    },
    name:{
        color:'black',
        alignSelf:"flex-start",
        padding: 10
    }
}) 



export default Post