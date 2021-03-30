import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity ,TextInput,AsyncStorage,Dimensions} from 'react-native';
import Input from "../Form/textInput";
import {signIn} from '../../Servises/ApiServices'

const {width,height}=Dimensions.get('window')

const SignInScreen = (props) =>{
  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('')
  const [password,setPassword]=useState('')

  const onChangeEmail = (e) => {
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))
      {
        setEmail(e)
        setEmailError('')
      }
      else
        setEmailError("Please Enter Valid Email")
      };
      const loginFunction=async()=>{
        signIn(email,password).then(async res=>{
          if(res.success){
            console.log(res);
            var department=res.department;
            console.log(department)
             props.navigation.navigate('Home Main'); 
      
            await AsyncStorage.setItem("token", JSON.stringify(res.token));
            await AsyncStorage.setItem("department", JSON.stringify(res.user.department));
            await AsyncStorage.setItem("email", JSON.stringify(res.user.email));
      
          }
          else{

          }

        }).catch(err=>{
          console.log(err)
        })
       }
    
      
      const onChangePassword=(e)=>{
        setPassword(e)
      }
  return(
      <View style={styles.container}>
        <View  style={styles.loginPage}>
        <Text style={styles.head}>𝖘𝖎𝖌𝖓 𝖎𝖓</Text>
      {/* <Text style={styles.text}>Letz Connect</Text> */}
          {/* <Text style={{}}>Username/Email ID</Text> */}
        
          <Input icon="email" placeholder="     Email" onChangeText={onChangeEmail} error={emailError} />
      <Text></Text>
   
          {/* <Text style={{marginTop:20}}>Password</Text> */}
         
          <Input icon="key" placeholder="Password" secureTextEntry onChangeText={onChangePassword} />
          {/* <View style={styles.buttons}>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={loginFunction}
            style={styles.userButton}>
        <Text style={{ fontSize: 18, color: 'white' }} >User</Text>
      </TouchableOpacity>
      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={loginFunction}
            style={styles.adminButton}>
        <Text style={{ fontSize: 18, color: 'black' }} >Network Engineers</Text>
      </TouchableOpacity>
          </View> */}
          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={loginFunction}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >𝖘𝖎𝖌𝖓 𝖎𝖓</Text>
      </TouchableOpacity>
      {/* <Text style={{ color: "black",alignSelf:"center" }}>
          Don't Have an Account? &nbsp;
          <Text
            style={[{ textDecorationLine: "underline" }]}
            onPress={() => props.navigation.navigate("Sign up")}
          >
            SignUp Here!
          </Text>
          </Text> */}
          
          </View>
      </View>
  )
     
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'flex-start', 
            paddingTop:50,
            backgroundColor:"#FFE3FA",
       
            paddingTop:height/3.5,
          
          },
          head:{
textAlign:'center',
color:"blueviolet",
fontSize:26, 
fontWeight: "bold",
marginBottom:40
          },
    text:{
        color:'#807EDD',
        fontWeight:'bold',
        fontSize:36,
      marginLeft:70,
        fontWeight:"700",
        marginBottom:"10%"
    },
    button:{
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
      width:210
     },
     userButton:{
      backgroundColor: "#FD820B",
      borderRadius: 10,
      height:40,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 50,
      elevation: 10,
      borderWidth:0.8,


     },
     adminButton:{
      backgroundColor: "white",
      borderRadius: 10,
      height:40,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 50,
      elevation: 10,
      borderWidth:0.8,


     },
     buttons:{
       flexDirection:'row',
        alignSelf:"center",
        paddingBottom: 10,
    // paddingLeft:10,
    // paddingRight:10,
     } ,  
loginPage:{
  color:'red',
  borderWidth:0,
  padding:20,
  marginLeft:55,
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
}

})

          


