import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Picker ,TextInput,AsyncStorage,Dimensions} from 'react-native';
import Input from "../Form/textInput";
import {dailyUpdates} from '../../Servises/ApiServices'

const {width,height}=Dimensions.get('window')

const SignInScreen = (props) =>{

  const [department, setDepartment] = useState("MCA");
  const [description,setDescription] =useState('')
  const [descriptionError,setDescriptionError] =useState('')

      const CreateFunction=async()=>{ 
          if(description){
            dailyUpdates(department,description).then(async res=>{
                if(res.success){
                  console.log(res);
                   props.navigation.navigate('Daily Updates');
                }
                else{
                    console.log(res)
                }
      
              }).catch(err=>{
                console.log(err)
              })
             }
          }

    
      
      const descriptionOnchange=(e)=>{
        setDescription(e)
      }
  return(
      <View style={styles.container}>



      <Text style={{fontWeight:"bold",fontSize:20}}>Description</Text>

      <TextInput
      style={styles.box}
      onChangeText={descriptionOnchange}
    //   value={value}
    />
          <Text style={{fontWeight:"bold",fontSize:20}}>Select Department</Text>

<Picker
  selectedValue={department}
  style={styles.select}
  onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
>
  <Picker.Item label="MCA" value="MCA" />
  <Picker.Item label="MSC CS" value="MSC CS" />
  <Picker.Item label="MSC IT" value="MSC IT" />
  <Picker.Item label="BCA" value="BCA" />
  <Picker.Item label="BSC CS" value="BSC CS" />
  <Picker.Item label="BSC IT" value="BSC IT" />
</Picker>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={CreateFunction}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Create Daily Updates</Text>
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
            backgroundColor:"white",
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
      height:40,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      padding:20,
      margin:10,
      borderWidth:1,
      marginTop:60

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

          


