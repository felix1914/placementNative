// import React,{useState,useEffect} from 'react';
// import { View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
// const {width,height}=Dimensions.get('window')
// import {getIssue,getDailyUpdate,getUserId,getAllDailyUpdate,getAllIssue} from '../../Servises/ApiServices'
// // import { Container } from './styles';
//  const landing = (props) => {
// // console.log("hello",getUserId('department'))

  
//   return (
//     <View style={{backgroundColor:"white",height:height,width:width}}>

//     <View style={styles.container}>
// {department==='Network'?null:

//       <View>
//         <View style={{flexDirection:"row",}}>
//             <Text style={{fontWeight:"bold",fontSize:15,flex:1}}>Recent Daily Update</Text>
//             <Text style={{fontWeight:"bold",color:"#1E538F",fontSize:15}}>View all &gt;&gt;</Text>
//         </View>
//             <View style={styles.dailyUpdates}>
//               {dailyUpdates?
//               <Text>{dailyUpdates.description}</Text>:
//               <Text style={{fontSize:18}}>No daily update</Text>}
//             </View>
//       </View>}
       
//       <View>
//         <View style={{flexDirection:"row"}}>
//         {department==='Network'?
//         <Text style={{fontWeight:"bold",fontSize:15,flex:1}}>Recent Inquiry</Text>
//        :
//        <Text style={{fontWeight:"bold",fontSize:15,flex:1}}>Your recent Inquiry</Text>
//         }
//         {department==='Network'?
// null:
//             <Text style={{fontWeight:"bold",color:"#1E538F",fontSize:15}}>View all&gt;&gt;</Text>}
//         </View>
//             <View  style={styles.dailyUpdates}>
//               {inquiry?
//               <View>
//               <View style={{backgroundColor:[inquiry.status==='Not completed'?"red":inquiry.status==='Complete'? "#80E220":"#F7BC13"],padding:3,borderRadius:10,width:"auto",alignSelf:"flex-end"}}><Text style={{color:"white",justifyContent:"center"}}>{inquiry.status}</Text></View>
//               <View style={{flexDirection:"row"}}>
//                 <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Issue Type:</Text>
//                 <Text style={styles.data}>{inquiry.issueType}</Text>
//               </View>
//               <View style={{flexDirection:"row"}}>
//                 <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Location:</Text>
//                 <Text style={styles.data}>{inquiry.location}</Text>
//               </View> 
//               <View style={{flexDirection:"row"}}>
//                 <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Assigned to:</Text>
//                 <Text style={styles.data}>{inquiry.assignedto}</Text>
//               </View>
//               <View style={{flexDirection:"row"}}>
//                 <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Reporting At:</Text>
//                 <Text style={styles.data}>{inquiry.createdAt}</Text>
//               </View>
//               </View>
//               :
//               <Text style={{fontSize:18}}>No Inquiry Generated Before</Text>}
//             </View>
//       </View>


//       {department==='Network'?
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Add Daily Updates')}
//         // onPress={loginFunction}
//         style={styles.button}>
//         <Text style={{ fontSize: 18, color: 'white' }} >Add Daily Updates</Text>
//       </TouchableOpacity>: 
//            <TouchableOpacity
//         onPress={() => props.navigation.navigate('Add Inquiry')}
//         // onPress={loginFunction}
//         style={styles.button}>
//         <Text style={{ fontSize: 18, color: 'white' }} >Add Inquiry</Text>
//       </TouchableOpacity>}
//     </View>
//     </View>
//   )
// }
// export default landing;

// const styles = StyleSheet.create({
//   container:{
//     width:width/1.23,
//     alignSelf:"center",
//     paddingTop:height/15,

//   },
//   button:{
//     backgroundColor: "#1E538F",
//     borderRadius: 10,
//     height:40,
//     alignSelf:"center",
//     alignItems:"center",
//     justifyContent:"center",
//     padding:20,
//     margin:10,
//     borderWidth:1,
//     marginTop:height/15

//    },
//    dailyUpdates:{
//     //  alignSelf:"center",
//      height:height/4,
//      width:width/1.23,
//      borderRadius:10,
//      borderWidth:1,
//      margin:10,
//      padding:10,
//     // justifyContent:"center",
//     // alignItems:"center"
//    },
//    data:{
//     height: 25,
//     borderColor: "silver",
//     borderWidth: 1,
//     backgroundColor: "white",
//     padding: 3,
//     marginTop:5,
//     flex: 1,
//     borderRadius:10,
//     shadowColor: '#000',
//     shadowOffset: { width: 1, height: 1 },
//     shadowOpacity:  0.4,
//     shadowRadius: 50,
//     elevation: 10,
//     borderTopWidth:0,
//     alignSelf:"center"
//    }
//   })


import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';

const Home = (props) =>{
  return(
      <View style={styles.container}>
         <View  style={styles.loginPage}>
          <Text style={styles.text}>𝐇𝐎𝐒𝐓𝐄𝐋 𝐅𝐎𝐎𝐃 𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓</Text>
          
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' , marginLeft:10}}>Lets Go↠</Text>
      </TouchableOpacity>
      </View>
      </View>
  )
     
}
export default Home;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'center', 
            paddingTop:50,
            justifyContent: 'center',
            backgroundColor:"#FFE3FA",
          },
    text:{
        color:'#807EDD',
        fontWeight:'800',
        fontSize:32,
        // fontFamily:'Mulish',
         alignItems:'center',
        // justifyContent:'center',
        marginBottom:110,
        fontWeight:"bold",
        marginLeft:40,
        paddingTop:30
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
