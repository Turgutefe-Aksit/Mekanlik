import React, { useState } from "react";
import { StyleSheet,View,Text, TextInput, Image,Button, FlatList } from "react-native";
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import TabBar from "./tabBar";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const Home = () =>{

    //API'den gelen değerler verilcek
    const [postData,setPostData] = useState([
        {name: 'yemek', km:5.3},
        {name: 'restorant', km:1.7},
        {name: 'tekel', km:2.4},
        {name: 'tekel', km:2.4},
    ])
    return(
        <View styles={styles.mainCont}>
            <TabBar styles={styles.tabBar}></TabBar>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 100 }} 
                data={postData}
                renderItem={({item})=>(
                    <Post name={item.name} km={item.km}></Post>
                )}

            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainCont:{
        width:'100%',
        flex:1,
        
    },
    tabBar:{
        
        width:'100%'
    },
    feed:{
        
        width:'100%'
    }
}) 



export default Home