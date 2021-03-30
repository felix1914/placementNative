import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity ,TextInput,AsyncStorage,Dimensions} from 'react-native';
import Input from "../Form/textInput";
import {SetPassword} from '../../Servises/ApiServices'

const {width,height}=Dimensions.get('window')

const SignInScreen = (props) =>{
  const [code,setCode]=useState('');
  const [emailError,setEmailError]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [confirmPasswordError,setConfirmPasswordError]=useState('')


  const onChangeCode = (e) => {
   
        setCode(e)
      }
      
      const verifyFunction=async()=>{
        SetPassword(parseInt(code),password).then(async res=>{
          if(res.success){
            console.log(res)
            props.navigation.navigate('Login')
          }
          
          else{
            console.log(res)
          }

        }).catch(err=>{
          console.log(err)
        })
       }
    
      
      const onChangePassword=(e)=>{
        setPassword(e)
      }
     const onChangeConfirmPassword=(e)=>{
       if(password===e){
        setConfirmPassword(e)
        setConfirmPasswordError('')
       }
       else{
        setConfirmPasswordError('Password Not Match')
       }

     }
  return(
      <View style={styles.container}>
      {/* <Text style={styles.text}>Letz Connect</Text> */}
          {/* <Text style={{}}>Username/Email ID</Text> */}
          <Input icon="email" placeholder="Confirm Code" onChangeText={onChangeCode} error={emailError} />
      
          {/* <Text style={{marginTop:20}}>Password</Text> */}
          <Input icon="key" placeholder="Password" secureTextEntry onChangeText={onChangePassword} />
          <Input icon="key" placeholder="Confirm Password" secureTextEntry onChangeText={onChangeConfirmPassword} error={confirmPasswordError} />
          
          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={verifyFunction}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Verify</Text>
      </TouchableOpacity>

      </View>
  )
     
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'flex-start', 
            paddingTop:50,
            backgroundColor:"white",
            paddingTop:height/3.5
          },
    text:{
        color:'#807EDD',
        fontWeight:'bold',
        fontSize:36,
      marginLeft:70,

        marginBottom:"10%"
    },
    button:{
      backgroundColor: "#1E538F",
      borderRadius: 10,
      height:40,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      borderWidth:1,
      marginTop:60

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
     }   
    
})

          


