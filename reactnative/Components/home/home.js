import React, { useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';
import {getUser} from '../../Servises/ApiServices';
const Home = (props) =>{
    const [touchableOpacity, setTouchableOpacity] = useState(false);

  const showTouchableOpacity = () => setTouchableOpacity(!touchableOpacity);
  const [user,setUser]= useState({})
  const getUsers=async()=>{
    let result;
    try {
        result = await getUser();
    } catch (e) { }
    try {
        if (result.success) {
          setUser(result.user)
             console.log(result.user)    
        }
    } catch (e) { }
  }
  useEffect(() => {
    getUsers();
}, []);
  return(
      <View style={styles.container}>
         <View  style={styles.loginPage}>
          <Text style={styles.text1}>𝐑𝐀𝐓𝐇𝐍𝐀𝐕𝐄𝐋 𝐒𝐔𝐁𝐑𝐀𝐌𝐀𝐍𝐈𝐀𝐌 𝐂𝐎𝐋𝐋𝐄𝐆𝐄 𝐎𝐅 𝐀𝐑𝐓𝐒 & 𝐒𝐂𝐈𝐄𝐍𝐂𝐄 </Text>
          <Text style={styles.text2}>(AUTONOMOUS)</Text>
          <Text></Text>
          <Text style={styles.text3}>HOSTEL FOOD MANAGEMENT</Text>
          <Text></Text>
          <Text style={styles.text4}>WELCOME</Text>
          {user.admin?
          <View>
      <TouchableOpacity
            onPress={() => props.navigation.navigate('StudentDetails')}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' , marginLeft:10}}>𝕊𝕥𝕦𝕕𝕖𝕟𝕥𝕤 𝔻𝕖𝕥𝕒𝕚𝕝𝕤</Text>
      </TouchableOpacity>
                <TouchableOpacity
            onPress={() => props.navigation.navigate('StudentUpdate')}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' , marginLeft:10}}>𝕊𝕥𝕦𝕕𝕖𝕟𝕥𝕤 𝕌𝕡𝕕𝕒𝕥𝕖</Text>
      </TouchableOpacity>
      </View>:
       <View>
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Specifications')}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' , marginLeft:10}}>𝕊𝕥𝕦𝕕𝕖𝕟𝕥𝕤 ℝ𝕖𝕡𝕠𝕣𝕥𝕤</Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' , marginLeft:10}}>𝕎𝕖𝕖𝕜𝕝𝕪 𝕊𝕡𝕖𝕔𝕚𝕒𝕝</Text>
      </TouchableOpacity>
      </View>}
      </View>
      </View>
  )
     
}
export default Home;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'center', 
            paddingTop:0,
            justifyContent: 'center',
            backgroundColor:"#FFE3FA",
          },
    text1:{
        // color:"blueviolet",
        fontWeight:'800',
        fontSize:20,
        
        // fontFamily:'Mulish',
         alignItems:'center',
        // justifyContent:'center',
        marginBottom:10,
        fontWeight:"bold",
        marginLeft:1,
        paddingTop:20
    },
    text2:{
        // color:"blueviolet",
        fontWeight:'800',
        fontSize:18,
        
        // fontFamily:'Mulish',
         alignItems:'center',
        // justifyContent:'center',
        marginBottom:10,
        fontWeight:"bold",
        marginLeft:75,
       
    },
    text3:{
        // color:"blueviolet",
        fontWeight:'800',
        fontSize:18,
        
        // fontFamily:'Mulish',
         alignItems:'center',
        // justifyContent:'center',
        marginBottom:10,
        fontWeight:"bold",
        marginLeft:25,
       
    },
    text4:{
        // color:"blueviolet",
        fontWeight:'800',
        fontSize:18,
        
        // fontFamily:'Mulish',
         alignItems:'center',
        // justifyContent:'center',
        marginBottom:10,
        fontWeight:"bold",
        marginLeft:100,
       
    },
    input:{
        backgroundColor:'#fff',
        padding:20,
        width:320,
        marginTop:10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor : "#0000",
        shadowRadius: 10,
        shadowOffset : { width: 56, height: 13},
        borderWidth:0,
        borderRadius:0,
       
     },button:{
      backgroundColor: "#1E538F",
      borderRadius: 10,
      height:5,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      borderWidth:1,
      marginTop:30,
      backgroundColor:"#CE17E4",
      width:220
     },     
     loginPage:{
      color:'red',
      borderWidth:0,

      padding:20,
      marginLeft:5,
      borderRadius:10,
      backgroundColor:"white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      
      elevation: 21,
      width:350
    } 
    
})
