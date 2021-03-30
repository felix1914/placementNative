import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,SafeAreaView} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
 import {getAllIssue,getDailyUpdate,getUserId,getIssue} from '../../Servises/ApiServices'
// import { Container } from './styles';

 const landing = (props) => {
  const [inquiry,setInquiry]=useState([]);
  const [department,setDepartment]=useState('')
  useEffect(()=>{
    getUserId('department').then(res=>{
      console.log("dep",res)
      setDepartment(JSON.parse(res))
    })
  })
  useEffect(()=>{
    if(department==='Network'){
    getAllIssue().then((res)=>{
      console.log(res)
      setInquiry(res.issue)
    })
  }
    else{
      getIssue().then((res)=>{
        console.log(res)
        setInquiry(res.issue)
      })
    }
  },[department]);
//   useEffect(()=>{
//     getAllIssue().then((res)=>{
//       console.log(res)
//       setInquiry(res.issue)
//     })
//   },[]);
  const InquiryFunction= inquiry.map((data) =>
 
  <View  style={styles.dailyUpdates}>
   <View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.3,fontWeight:"bold",marginLeft:10,marginTop:5}}>Issue Type:</Text>
    <Text style={styles.data}>{data.issueType}</Text>
  <Text style={{color:"silver",flex:0.4,margin:6,marginTop:10}}>{moment(data.createdAt).fromNow()}</Text>

  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.3,fontWeight:"bold",marginLeft:10,marginTop:5}}>Location:</Text>
    <Text style={styles.data}>{data.location}</Text>
    <TouchableOpacity style={{flex:0.3,alignSelf:"flex-end",margin:6, backgroundColor: "white",borderRadius:10,width:"auto",paddingTop:3,paddingBottom:3,paddingLeft:20,marginTop:5,marginBottom:3,borderColor:"green",borderWidth:1}} onPress={()=>props.navigation.navigate('Inquiry',{Inquiry:data})}>
    <Text style={{color:"green"}}>View &gt;&gt;</Text>
  </TouchableOpacity>
  </View> 
  <View style={{flexDirection:"row"}}>
  <Text style={{flex:0.3,fontWeight:"bold",marginLeft:10,marginTop:5}}>Assigned to:</Text>
    <Text style={styles.data}>{data.assignedto}</Text>
  <View style={{flex:0.3,backgroundColor:[data.status==='Not completed'?"red":data.status==='Complete'? "#80E220":"#F7BC13"],padding:6,borderRadius:10,width:"auto",alignSelf:"flex-end",margin:6}}><Text style={{color:"white",justifyContent:"center",fontSize:12}}>{data.status}</Text></View>

  </View>

  </View>
   
  </View>
);

  return (
    <SafeAreaView style={{backgroundColor:"white",maxHeight:'auto',flex:1,height:"auto"}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {InquiryFunction}

      
    </ScrollView>
    </SafeAreaView>
  )
}
export default landing;

const styles = StyleSheet.create({
  container:{
    width:width/1.05,
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
     height:height/5,
     width:width/1.05,
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
    //  padding:10,
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
    flex: 0.4,
    borderRadius:10,
    marginBottom:3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderTopWidth:0,
    alignSelf:"center",
    justifyContent:"center"
   }
  })