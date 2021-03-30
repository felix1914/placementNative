import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity ,TextInput,AsyncStorage} from 'react-native';
import Input from "../Form/textInput";
import {signIn} from '../../Servises/ApiServices'
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
          props.navigation.navigate(' ')   
      await AsyncStorage.setItem("token", JSON.stringify(res.token));

        }).catch(err=>{
          console.log(err)
        })
       }
    
      
      const onChangePassword=(e)=>{
        setPassword(e)
      }
  return(
      <View style={styles.container}>
      <Text style={styles.text}>Letz Connect</Text>
          <Text style={{}}>Username/Email ID</Text>
          <Input icon="email" placeholder="Email" onChangeText={onChangeEmail} error={emailError} />
      
          <Text style={{marginTop:20}}>Password</Text>
          <Input icon="key" placeholder="******" secureTextEntry onChangeText={onChangePassword} />

          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={loginFunction}
            style={styles.input}>
        <Text style={{ fontSize: 20, color: '#000000' , marginLeft:100}} >Sign In</Text>
      </TouchableOpacity>

      <Text>New to LetzConnect ? Create New Account</Text>
      </View>
  )
     
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'flex-start', 
            marginTop:50,
            marginLeft:20
          },
    text:{
        color:'#807EDD',
        fontWeight:'bold',
        fontSize:36,
      marginLeft:70,
        marginBottom:"10%"
    },
    input:{
        backgroundColor:'#fff',
        padding:20,
        width:320,
        marginTop:10
     }      
    
})

          



//  import React, { Children, useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import Input from "../Form/textInput";
// import LineraGradient from "../LinearGradient/linearGradient";
// import PrimaryButton from "../PrimaryButton/primaryButton";
// import {login} from '../../Servises/ApiServices'
// import GoogleLogin from './signInGoogle'
// // import { AuthConsumer ,AuthContext} from '../../Auth/auth';

// const loginForm = (props) => {
  
//   const [email,setEmail]=useState('');
//   const [emailError,setEmailError]=useState('')
//   const [password,setPassword]=useState('')

//   const onChangeEmail = (e) => {
//     if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))
//   {
//     setEmail(e)
//     setEmailError('')
//   }
//   else
//     setEmailError("Please Enter Valid Email")
//   };
//   const loginFunction=()=>{
//     let result = login(email, password);
//           if (result) {
//             console.log("Succesfully login");
//             props.navigation.navigate("Welcome")
//           }

//   }
//   const onChangePassword=(e)=>{
//     setPassword(e)
//   }
//   return (
//     <View style={styles.container}>
//     <LineraGradient />
//     <Text style={styles.head}>LOGIN</Text>


//       <Input icon="email" placeholder="Email" onChangeText={onChangeEmail} error={emailError} />
//       <Input icon="key" placeholder="Password" secureTextEntry onChangeText={onChangePassword} />
//       <PrimaryButton text="LOGIN" onPress={loginFunction} />
     
  
//     <View style={styles.text}>
//         <Text style={{ color: "white" }}>
//           Not a member? &nbsp;
//           <Text
//             style={[{ textDecorationLine: "underline",}]}
//             onPress={() => props.navigation.navigate("Sign up")}
//           >
//             Sign up Here!
//           </Text>
//         </Text>
//       </View>
//       {/* <GoogleLogin /> */}
//     </View>
//   );
// };
// export default loginForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     alignItems: "center",
//     paddingTop: 40,
//   },
//   head: {
//     fontSize: 30,
//     alignItems: "center",
//     color: "rgb(173,43,118)",
//     fontFamily: "sans-serif-medium",
//   },
// });





// // import React, { Children, useState } from "react";
// // import { View, StyleSheet, Text } from "react-native";
// // import Input from "../Form/textInput";
// // import LineraGradient from "../LinearGradient/linearGradient";
// // import PrimaryButton from "../PrimaryButton/primaryButton";
// // // import {login} from '../../Servises/ApiServices'
// // import { AuthConsumer ,AuthContext} from '../../Auth/auth';

// // const loginForm = (props) => {
  
// //   const [email,setEmail]=useState('');
// //   const [emailError,setEmailError]=useState('')
// //   const [password,setPassword]=useState('')

// //   const onChangeEmail = (e) => {
// //     if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))
// //   {
// //     setEmail(e)
// //     setEmailError('')
// //   }
// //   else
// //     setEmailError("Please Enter Valid Email")
// //   };
// //   // const loginFunction=()=>{
// //   //   let result = login(email, password);
// //   //         if (result) {
// //   //           console.log("Succesfully login");
// //   //         }

// //   // }
// //   const onChangePassword=(e)=>{
// //     setPassword(e)
// //   }
// //   return (
// //     <View style={styles.container}>
// //     <LineraGradient />
// //     <Text style={styles.head}>LOGIN</Text>
// //     <AuthConsumer>
// //           {({ login }) => (

// // <View>
// //       <Input icon="email" placeholder="Email" onChangeText={onChangeEmail} error={emailError} />
// //       <Input icon="key" placeholder="Password" secureTextEntry onChangeText={onChangePassword} />
// //       <PrimaryButton text="LOGIN" onPress={() => login(email, password,(message,success)=>{
// //         if(success){
// //           props.navigation.navigate("Home")
// //         }

// //       })} />
// //       </View>
     
// //     )}

// //     </AuthConsumer>
// //     <View style={styles.text}>
// //         <Text style={{ color: "white" }}>
// //           Not a member? &nbsp;
// //           <Text
// //             style={[{ textDecorationLine: "underline",}]}
// //             onPress={() => props.navigation.navigate("Sign up")}
// //           >
// //             Sign up Here!
// //           </Text>
// //         </Text>
// //       </View>
// //     </View>
// //   );
// // };
// // export default loginForm;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "black",
// //     alignItems: "center",
// //     paddingTop: 100,
// //   },
// //   head: {
// //     fontSize: 30,
// //     alignItems: "center",
// //     color: "rgb(173,43,118)",
// //     fontFamily: "sans-serif-medium",
// //   },
// // });
