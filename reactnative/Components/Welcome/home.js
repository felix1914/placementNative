import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';

const HomeScreen = (props) =>{
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
export default HomeScreen;

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
