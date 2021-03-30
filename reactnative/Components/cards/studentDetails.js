import React,{useState,useEffect} from 'react';
   
    import { View, Text, Button, StyleSheet,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import {getAllUser} from '../../Servises/ApiServices'
function StudentDetails () {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        getAllUser().then((res)=>{
            console.log(res.userccccc)
            setUser(res.user);
        }).catch((e)=>{
            console.log(e)
        })
    },[]);
    const userMap=user.map((data)=>
    <View>
        
        <View  style={styles.loginPage}>
            <Text style={styles.text}>NAME                :  {data.Name}</Text>
            <Text style={styles.text}>STUDENT ID    :  {data.studentId}</Text>
            <Text style={styles.text}>DEPARTMENT  :  {data.department}</Text>
            <Text style={styles.text}>EMAIL                :  {data.email}</Text>
            </View>
        
    </View>);
  return(
      <View style={styles.container}>
          <SafeAreaView style={{backgroundColor:"#FFE3FA",maxHeight:'auto',flex:1,height:"auto"}}>
<ScrollView  showsVerticalScrollIndicator={false}>
          {userMap}
        
       </ScrollView>
       </SafeAreaView>
       </View>
      
  )
     
}
export default StudentDetails;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'center', 
            paddingTop:0,
            justifyContent: 'center',
            backgroundColor:"#FFE3FA",
           
          },
    text:{
        color:'#807EDD',
        fontWeight:'800',
        fontSize:15,
        // fontFamily:'Mulish',
        //  alignItems:'center',
        // justifyContent:'center',
        marginBottom:0,
        fontWeight:"bold",
        marginLeft:0,
        paddingTop:8
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
 
      borderWidth:0,
      marginTop:10,
      padding:20,
      marginLeft:5,
      borderRadius:10,
      backgroundColor:"white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 1.97,
      
      elevation: 1,
      width:350
    } 
    
})
