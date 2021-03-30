import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,SafeAreaView} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
import {getIssue,getDailyUpdate} from '../../Servises/ApiServices'
// import { Container } from './styles';

 const landing = (props) => {
  const [inquiry,setInquiry]=useState([]);
  useEffect(()=>{
    getIssue().then((res)=>{
      console.log(res)
      setInquiry(res.issue)
    })
  },[]);
  const InquiryFunction= inquiry.map((data) =>
 
  <View  style={styles.dailyUpdates}>
   <View>
  <View style={{backgroundColor:[data.status==='Not completed'?"red":data.status==='Complete'? "#80E220":"#F7BC13"],padding:3,borderRadius:10,width:"auto",alignSelf:"flex-end"}}><Text style={{color:"white",justifyContent:"center"}}>{data.status}</Text></View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Issue Type:</Text>
    <Text style={styles.data}>{data.issueType}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Location:</Text>
    <Text style={styles.data}>{data.location}</Text>
  </View> 
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Assigned to:</Text>
    <Text style={styles.data}>{data.assignedto}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10,marginTop:5}}>Reporting At:</Text>
     <Text style={styles.data}>{moment(data.createdAt).format("DD/MM/YYYY")}</Text> 
  </View>
  <TouchableOpacity style={{alignSelf:"flex-end", backgroundColor: "#1E538F",borderRadius:10,width:"auto",paddingTop:3,paddingBottom:3,paddingLeft:30,paddingRight:30,marginTop:5,marginBottom:3}} onPress={()=>props.navigation.navigate('Inquiry',{Inquiry:data})}>
    <Text style={{color:"white"}}>View &gt;&gt;</Text>
  </TouchableOpacity>
  </View>
   
  </View>
);

  return (
    <SafeAreaView style={{backgroundColor:"white",height:'auto'}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {InquiryFunction}

      
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
     height:height/3.1,
     width:width/1.23,
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
     padding:10,
    // justifyContent:"center",
    // alignItems:"center"
   },
   data:{
    height: 28,
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 3,
    marginTop:5,
    flex: 1,
    borderRadius:10,
    marginBottom:3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderTopWidth:0,
    alignSelf:"center"
   }
  })