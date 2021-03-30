// import React,{useState,useEffect} from 'react';
// import { View,   StyleSheet,TouchableOpacity ,TextInput} from 'react-native';
// import { Form, Item ,Button,Text} from 'native-base';
// import Input from "../Form/textInput";

// const SignUpScreen = (props) =>{
//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const onPress = () => {
//     if (name != "") {
//       if (email != "") {
//         if (password != "") {
//           let signUp = signup(email, password, name);
//           if (signUp) {
//             console.log("Succesfully Sign up");
//           }
//         }
//       }
//     }
//   };

//   const onChangeEmail = (e) => {
//     if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) {
//       setEmail(e);
//       setEmailError("");
//     } else setEmailError("Please Enter Valid Email");
//   };

//   const onChangeName = (e) => {
//     if (e.length > 3) {
//       setName(e);
//       setNameError("");
//     } else setNameError("Please Enter atleast 3 characters");
//   };

//   const onChangePassword = (e) => {
//     if (e.length >= 8) {
//       setPassword(e);
//       setPasswordError("");
//     } else setPasswordError("Password Contain 8 Characters");
//   };
//   return(
//     <View style={styles.container}>
      
//       <Text style={styles.text}>Letz Connect</Text>
//       <Form>
//       <Text style={{marginLeft:10,fontSize:16}}>Username</Text>
//       <Item>
//       <Input
//         placeholder="Name"
//         onChangeText={onChangeName}
//         error={nameError}
//       />
//       </Item>

//            <Text style={{marginLeft:10,fontSize:16}}>Email</Text>
//       <Item>
//       <Input
//         textContentType="emailAddress"
//         placeholder="Email"
//         onChangeText={onChangeEmail}
//         error={emailError}
//       />
//         </Item> 
     
//            <Text style={{marginLeft:10,fontSize:16}}>Password</Text>
//            <Item>
//            <Input
//         placeholder="******"
//         secureTextEntry
//         onChangeText={onChangePassword}
//         error={passwordError}
//       /></Item>
//             <Text style={{marginLeft:14,fontSize:16}}>Confirm Password</Text>
//             <Item> 
//             <Input
//         placeholder="******"
//         secureTextEntry
//         onChangeText={onChangePassword}
//         error={passwordError}
//       />
//             </Item> 
//             {/* <Button transparent dark>
//             <Text>Sign In</Text></Button> */}

//       <TouchableOpacity
//             // onPress={() => props.navigation.navigate("SignIn")}
//             style={styles.input}>
//         <Text style={{ fontSize: 20, color: '#000000', marginLeft:100 }}>Sign Up</Text>
//       </TouchableOpacity>
//       <Text style={{fontSize:10}}>By continuing, I agree to LetzConnect Terms of service and Privacy policy</Text>
//       <Text style={{fontSize:12,marginLeft:50}}>Already have an Account ? Sign In here</Text>
//       </Form>
//       </View>
//   )
     
// }
// export default SignUpScreen;

// const styles = StyleSheet.create({
//     container: {
//             flex: 1, 
//             alignItems: 'center', 
//             justifyContent: 'center'
//           },
//     text:{
//         color:'#590995',
//         fontWeight:'800',
//         fontSize:36,
        
//         alignItems:'center',
//         justifyContent:'center',
//         marginBottom:10
//     },
//     input:{
//         backgroundColor:'#fff',
//         padding:20,
//         width:320,
//         marginTop:30,
//         marginLeft:20
//      }      
    
// })






import React, { Children, useState } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity} from "react-native";
import Input from "../Form/textInput";
import PrimaryButton from "../PrimaryButton/primaryButton";
import { signUp } from "../../Servises/ApiServices";
import FileUploader from '../FireBaseFileUploader/fileUploader'
const SignUp = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onPress = () => {
    if (name != "") {
      if (email != "") {
        if (password != "") {
          console.log(name,email,password)
          signUp(email,password,name).then((result) => {
            console.log(result)
            props.navigation.navigate(' ')
          }).catch((err) => {
            console.log(err)
          });
          }
        }
      }
    }
  

  const onChangeEmail = (e) => {
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) {
      setEmail(e);
      setEmailError("");
    } else setEmailError("Please Enter Valid Email");
  };

  const onChangeName = (e) => {
    if (e.length > 3) {
      setName(e);
      setNameError("");
    } else setNameError("Please Enter atleast 3 characters");
  };

  const onChangePassword = (e) => {
    if (e.length >= 8) {
      setPassword(e);
      setPasswordError("");
    } else setPasswordError("Password Contain 8 Characters");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Letz Connect</Text>
      <Text style={{marginLeft:10,fontSize:16}}>Username</Text>
      <Input
        icon="account"
        placeholder="Name"
        onChangeText={onChangeName}
        error={nameError}
      />
        <Text style={{marginLeft:10,fontSize:16}}>Email</Text>
      <Input
        icon="email"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeEmail}
        error={emailError}
      />
        <Text style={{marginLeft:10,fontSize:16}}>Password</Text>
      <Input
        icon="key"
        placeholder="*****"
        secureTextEntry
        onChangeText={onChangePassword}
        error={passwordError}
      /> 
       <Text style={{marginLeft:10,fontSize:16}}>Confirm Password</Text>
            <Input
        icon="key"
        placeholder="*****"
        secureTextEntry
        onChangeText={onChangePassword}
        error={passwordError}
      />
      {/* <PrimaryButton text="REGISTER" onPress={onPress} /> */}
      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={onPress}
            style={styles.input}>
        <Text style={{ fontSize: 20, color: '#000000' , marginLeft:100}} >Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.text}>
      <Text style={{fontSize:10}}>By continuing, I agree to LetzConnect Terms of service and Privacy policy</Text>
        <Text style={{ color: "white" }}>
          Already Have an Account? &nbsp;
          <Text
            style={[{ textDecorationLine: "underline" }]}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login Here!
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    // paddingTop: 70,
    marginLeft:20

  },
  head: {
    color:'#590995',
        fontWeight:'bold',
        fontSize:36,   
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    marginLeft:70

  },
  input:{
    backgroundColor:'#fff',
    padding:20,
    width:320,
    marginTop:5
 }  
});
