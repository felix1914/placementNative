



import React, {useState,useEffect} from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,Dimensions,AsyncStorage} from "react-native";
import Input from "../Form/textInput";
import { signUp } from "../../Servises/ApiServices";
const {width,height}=Dimensions.get('window')

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const CreateFunction=async()=>{
    console.log(name,studentId,email,department,type,password)
    const newUser={Name:name,studentId:studentId,department:department,email:email,type:type,password:password};
       signUp(newUser).then(async res=>{
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
  
  

  const onChangeEmail = (e) => {
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) {
      setEmail(e);
      setEmailError("");
    } else setEmailError("Please Enter Valid Email");
  };

  const nameOnchange=(e)=>{
    setName(e)
  }

  const studentIdOnchange=(e)=>{
    setStudentId(e)
  }
 const departmentOnchange=(e)=>{
            setDepartment(e)
          }
          const typeOnchange=(e)=>{
            setType(e)
          }
  const onChangePassword = (e) => {
    if (e.length >= 8) {
      setPassword(e);
      setPasswordError("");
    } else setPasswordError("Password Contain 8 Characters");
  };

  return (
    <View style={styles.container}>
         <View  style={styles.loginPage}>
        <Text style={styles.head}>𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗</Text>
      <Input
        placeholder="Name"
        onChangeText={nameOnchange}
      />
        <Input
        placeholder="Student Id"
        onChangeText={studentIdOnchange}
      />
        <Input
          textContentType="emailAddress"
        placeholder="Enter email"
        // onChangeText={onChangeId}
        error={emailError}
        onChangeText={onChangeEmail}
      />
        <Input
        placeholder="Depertment"
        onChangeText={departmentOnchange}
      />
        <Input
        placeholder="Type of person"
        onChangeText={typeOnchange}
      />
      <Input
        // textContentType="emailAddress"
        placeholder="Password"
        onChangeText={onChangePassword}
        
      />
   
      {/* <PrimaryButton text="REGISTER" onPress={onPress} /> */}
      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={CreateFunction}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white'}} >𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗</Text>
      </TouchableOpacity>
     
     
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'flex-start', 
   paddingTop:100,
    backgroundColor:"#FFE3FA",
    //  paddingTop:height/0.5
  },
  head: {
    color:'#590995',
        fontWeight:'bold',
        fontSize:36,   
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    marginLeft:60

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
  text:{
    width:width/1.25,
    alignSelf:"center"
  },
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
  
});
