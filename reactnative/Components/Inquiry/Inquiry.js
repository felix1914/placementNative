import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,SafeAreaView,Picker} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
import {getUserId,updateIssue} from '../../Servises/ApiServices'
// import { Container } from './styles';

 const landing = (props) => {
    const data  = props.route.params.Inquiry;
    console.log(props.route.params.Inquiry)

    const [department,setDepartment]=useState('')
    useEffect(()=>{
      getUserId('department').then(res=>{
        console.log("dep",res)
        setDepartment(JSON.parse(res))
      })
    })
    const updateFunction=(body)=>{
      console.log(body)
      updateIssue(body).then(res=>{
        if(res.success){
          console.log(res)
          props.navigation.navigate('All Inquiry');
        }
      })
    }
  return(
      <View style={{backgroundColor:"white",height:height,width:width}}>
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
     <Text style={{flex:0.6,fontWeight:"bold",marginLeft:10,marginTop:5}}>Issue Type:</Text>
     <Text style={styles.data}>{data.issueType}</Text>
   </View>
   <View style={{flexDirection:"row"}}>
     <Text style={{flex:0.6,fontWeight:"bold",marginLeft:10,marginTop:5}}>Location:</Text>
     <Text style={styles.data}>{data.location}</Text>
   </View> 
    <View  style={styles.dailyUpdates}>
    <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.6,fontWeight:"bold",marginLeft:10,marginTop:5}}>Assigned By:</Text>
   <Text style={styles.data}>{data.assignedBy}</Text>
   </View>

    <View>
   
   


   <View style={{flexDirection:"row"}}>
     <Text style={{flex:0.6,fontWeight:"bold",marginLeft:10,marginTop:5}}>Date & Time:</Text>
      <Text style={styles.data}>{moment(data.createdAt).format("DD/MM/YYYY & hh:mm A")}</Text> 
   </View>
   <View>
     <Text style={{fontWeight:"bold",marginLeft:10,marginTop:5}}>Description:</Text>
     <Text style={styles.description}>{data.description}</Text>
   </View>

   </View>

    
     </View>
     <Text style={{fontWeight:"bold",marginLeft:10,marginTop:5}}>Issue assigned to:</Text>
   <Text style={styles.data}>{data.assignedTo}</Text>
   <View style={{flexDirection:"row"}}>
   <Text style={{fontWeight:"bold",marginLeft:10,flex:0.8}}>Issue Status:-</Text>
   <View style={{backgroundColor:[data.status==='Not completed'?"red":data.status==='Complete'? "#80E220":"#F7BC13"],padding:3,borderRadius:10,width:"auto",alignSelf:"flex-end"}}><Text style={{color:"white",justifyContent:"center"}}>{data.status}</Text></View>
   </View>
   {department==='Network'?null:
   <View>
   {data.status==="Not completed"?
   <Text style={{marginLeft:10}}>Not completed</Text>
   :data.status==='Complete'?
   <Text style={{marginLeft:10}}>Your Issue Has Been Fixed Please Confirm to Verify</Text>:
   <Text style={{marginLeft:10}} >In Progress</Text>}</View>}
   {(department==='Network'&& data.status==="Not completed")?
   <View>
   <Text style={{fontWeight:"bold"}}>Assign this issue to</Text>

<Picker
  selectedValue={department}
  style={styles.select}
  onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
>
  <Picker.Item label={data.name} value={data.name} />

</Picker>
   </View>:null
   }
   {department==='Network'?null:
   <TouchableOpacity
            onPress={()=>updateFunction({active:false,id:data._id})}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Verify</Text>
      </TouchableOpacity> }
   {(department==='Network'&& data.status==='Not completed')?
      
        <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={()=>updateFunction({status:"In progress",assignedBy:data.name,assignedto:data.name,id:data._id})}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Assign employee</Text>
      </TouchableOpacity>:null}
   {(department==='Network'&& data.status==='In progress')?

         <TouchableOpacity
            onPress={()=>updateFunction({status:"Complete",id:data._id})}
            // onPress={() => props.navigation.navigate(' ')}
            // onPress={CreateFunction}
            style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Complete</Text>
      </TouchableOpacity>:null}

   </View>
   </View>
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
    marginTop:height/25

   },
   dailyUpdates:{
     
    //  alignSelf:"center",
     height:height/3,
     width:width/1.23,
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
    borderColor: "silver",
    padding:10,
    // justifyContent:"center",
    // alignItems:"center"
 
   },
   data:{
    height: 30,
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
    alignSelf:"center",
    marginBottom:10
   },
   description:{
    height:height/8,
    width:width/1.35,
    borderRadius:10,
    borderWidth:1,
    marginBottom:10,
    borderColor: "silver",
    padding:10,
    marginTop:5,
  
   },
   select:{
    height: 5,
     borderWidth: 1 ,
    width: width/1.3,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor:"silver",
    padding:15,
    shadowColor: '#000',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity:  0.4,
  shadowRadius: 50,
  elevation: 10,
  borderWidth:0.8,
  marginTop:10
 } 
  })