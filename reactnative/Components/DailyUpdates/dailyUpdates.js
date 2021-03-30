import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions,SafeAreaView,ScrollView} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
import {getDailyUpdate,getAllDailyUpdate,getUserId} from '../../Servises/ApiServices'
// import { SafeAreaView } from 'react-navigation';
// import { ScrollView } from 'react-native-gesture-handler';
// import { Container } from './styles';

 const landing = () => {
  const [dailyUpdates,setDailyUpdates]=useState([])
  const [department,setDepartment]=useState('')
  useEffect(()=>{},[])
  useEffect(()=>{ 
    getUserId('department').then(res=>{
      console.log("dep",res)
      setDepartment(JSON.parse(res))
    })
  })
  const getAllDailyUpdateFunction=()=>{
    getAllDailyUpdate().then((res)=>{
      console.log(res)
      setDailyUpdates(res.dailyUpdates)
    })  
  }
  useEffect(()=>{
    if(department==='Network'){
      getAllDailyUpdateFunction()
    }
    else{
      getDailyUpdate().then((res)=>{
        console.log(res)
        setDailyUpdates(res.dailyUpdates)
      })
    }

  },[department]);
  const dailyUpdatesFunction= dailyUpdates.map((data) =>
  <View>
  
  <View style={(department==='Network')?styles.department:styles.dailyUpdates}>
  {department==='Network'&&

  <View>
    <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Department</Text>
    <Text style={styles.data}>{data.department}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Created daily Upadtes by:</Text>
    <Text style={styles.data}>{data.name}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Reporting At:</Text>
     <Text style={styles.data}>{moment(data.createdAt).format("DD/MM/YYYY")}</Text> 
  </View>
  </View>}
  <Text style={{fontWeight:"bold",marginLeft:10,marginTop:5}}>Description:</Text>
  <Text style={{fontSize:14,margin:5}}>{data.description}</Text>
  <Text style={{color:"silver",alignSelf:"flex-end",justifyContent:"flex-end"}}>{moment(data.createdAt).fromNow()}</Text>
  </View>
 

</View>
); 
  return (
    <SafeAreaView style={{backgroundColor:"white",height:height,width:width}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
            {dailyUpdatesFunction}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}
export default landing;

const styles = StyleSheet.create({
  container:{
    width:width/1.23,
    alignSelf:"center",
    paddingTop:height/15,
 
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
    marginTop:height/15

   },
   dailyUpdates:{
    //  alignSelf:"center",
     height:"auto",
     width:width/1.23,
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
     padding:10, 
    // justifyContent:"center",
    // alignItems:"center"
   },
   department:{
    //  alignSelf:"center",
     height:"auto",
     width:"auto",
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
     padding:10,
    // justifyContent:"center",
    // alignItems:"center"
   },
   data:{
    height: 25,
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 3,
    marginTop:5,
    flex: 1,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderTopWidth:0,
    alignSelf:"center"
   }
  })