import React from "react";
import { StyleSheet,View,Text, TextInput, Image,Button } from "react-native";
import InputBox from "../components/InputBox";

const Login = () =>{
    return(
        <View style={styles.mainCont}>
            <View style = {styles.topCont} >
                
                <Image style={styles.image} source={require('../images/avatar.png')} />
                <InputBox placeholder={'User Name'}/>
                <InputBox placeholder={'Password'}/>
                <Button title="Login" onPress={console.log('Touched')}></Button>
            </View>

            <View >
                <Text style={styles.bottomCont}>
                    Don't have an acc?
                </Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainCont:{
        alignItems:"center", 
        marginTop:100
        
    },
    topCont:{

    },
    bottomCont:{
        alignSelf:"center",
        marginTop: 100,
        color:'#0090ff'
    },
    text:{
        borderWidth:1,
        width:300,
        borderBlockColor:"grey",
        borderRadius:5,
        paddingHorizontal:10
    },
    image:{
        height:100,
        width:100,
        borderWidth:1,
        borderColor:"black",
        borderRadius:100,
        marginBottom: 25,
        alignSelf:"center"
    },
    button:{
        height:100,
        width:400
    }
}) 



export default Login