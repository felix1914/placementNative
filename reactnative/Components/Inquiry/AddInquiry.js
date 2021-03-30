import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Picker ,TextInput,AsyncStorage,Dimensions} from 'react-native';
import Input from "../Form/textInput";
 import {studentUpdates} from '../../Servises/ApiServices'
const {width,height}=Dimensions.get('window')

const SignInScreen = (props) =>{
  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('')
  const [name,setName]=useState('')
  const [department, setDepartment] = useState("");
  // const [, setLocation] = useState("MCA");
  const [description,setDescription] =useState('')
  const [descriptionError,setDescriptionError] =useState('')
  const onChangeEmail = (e) => {
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))
      {
        setEmail(e)
        setEmailError('')
      }
      else
        setEmailError("Please Enter Valid Email")
      };
      const CreateFunction=async()=>{
        console.log(name,description,description)
        const newUser={Name:name,department:department,description:description};
            studentUpdates(newUser).then(async res=>{
                if(res.success){
                  console.log(res);
                   props.navigation.navigate('Home');
                }
                else{
                    console.log(res)
                }
      
              }).catch(err=>{
                console.log(err)
              })
          }

          const nameOnchange=(e)=>{
            setName(e)
          }
          const departmentOnchange=(e)=>{
            setDepartment(e)
          }
      const descriptionOnchange=(e)=>{
        setDescription(e)
      }
  return(
      <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:20}}>Name</Text>
           
      <TextInput
      style={styles.box1}
      onChangeText={nameOnchange}
    //   value={value}
    />
      <Text style={{fontWeight:"bold",fontSize:20}}>Department</Text>

      <TextInput
      style={styles.box1}
      onChangeText={departmentOnchange}
    //   value={value}
    />
      <Text style={{fontWeight:"bold",fontSize:20}}>Description</Text>

      <TextInput
      style={styles.box}
      onChangeText={descriptionOnchange}
    //   value={value}
    />
          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={CreateFunction}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >𝕾𝖊𝖓𝖉 𝕽𝖊𝖕𝖔𝖗𝖙</Text>
      </TouchableOpacity>
      
      </View>
  )
     
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'flex-start', 
            // paddingTop:50,
            backgroundColor:"#FFE3FA",
            paddingTop:height/7,
            paddingLeft:width/10
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
      height:5,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      borderWidth:1,
      marginTop:30,
      marginRight:60,
      backgroundColor:"#CE17E4",
      width:210
     },
     
     box:{
        height: 150,
         borderWidth: 1 ,
        width: width/1.3,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor:"silver",
        padding:20,
        shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 50,
      elevation: 10,
      borderWidth:0.8,
      marginTop:10
     },
     box1:{
      height: 55,
       borderWidth: 1 ,
      width: width/1.3,
      backgroundColor: "white",
      borderRadius: 20,
      borderColor:"silver",
      padding:20,
      shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderWidth:0.8,
    marginTop:10
   },
     select:{
        height: 10,
         borderWidth: 1 ,
        width: width/1.3,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor:"silver",
        padding:20,
        shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 50,
      elevation: 10,
      borderWidth:0.8,
      marginTop:10
     } 
    
})

          


