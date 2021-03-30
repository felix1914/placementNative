import React ,{useState,useEffect}from 'react';
import { View,Text,StyleSheet,Image,SafeAreaView,ScrollView } from 'react-native';
import {getUserId,getUser,getEducation,getExperience} from '../../Servises/ApiServices'


 const profile = (props) => {
    const [education,setEducation]=useState([])
    const [experience,setExperiecne]=useState([])
    const [photoURl,setPhotoURL]=useState()
    const [user,setUser]=useState({})
  useEffect(()=>{
    getUser().then((result) => {
      setUser(result.user)
    }).catch((err) => {
      console.log(err)
    });

    getEducation().then((result) => {
      // console.log("EDU",result)
      setEducation(result.data)
    }).catch((err) => {
      console.log(err)
    });  

      getExperience().then((result) => {
        // console.log("EXP",result)
      setExperiecne(result.data)
    }).catch((err) => {
      console.log(err)
    });

      const getEmail = async () => {
          const fetchData = await getUserId('email'); // fetchDailyData() is calling Api 
          setEmail(JSON.parse(fetchData));
        }
        const getName = async () => {
          const fetchData = await getUserId('name'); // fetchDailyData() is calling Api 
          setName(JSON.parse(fetchData));
        }
      
        getEmail()
        getName()
        
  },[])

  return (
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:"center",alignContent:"center"}}>
      <ScrollView>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        }}
      />
      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.text}>{user.education}</Text>
      <Text style={styles.text}>{user.type}</Text>
      
      <View style={{flexDirection:'row',marginTop:25,marginBottom:15}}>
      <View style={{flex:0.5}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Full Name</Text>
      <Text style={{color:"#2C78E4",fontSize:17}}>{user.full_name}</Text>
      </View>
      <View style={{flex:0.5}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Date Of Birth</Text>
      <Text style={{color:"#2C78E4",fontSize:17}}>{user.DOB}</Text>
      </View>
     </View>
     <Text style={{fontWeight:"bold",fontSize:17}}>Gender</Text>
      <Text style={{color:"#2C78E4",fontSize:17}}>{user.gender}</Text>
      <Text style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>Address</Text>
      <Text style={{color:"#2C78E4",fontSize:17}}>{user.address}</Text>
      <View style={{backgroundColor:"#F7F7FA",marginTop:25}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Contacts</Text>
      <Text style={{color:"#2C78E4",fontSize:17,marginLeft:100}}>{user.email}</Text>
      <Text style={{color:"#2C78E4",fontSize:17,marginLeft:100}}>{user.phone}</Text>

      </View>
     
</ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
    fontWeight:"bold",
    marginLeft:100,
    color:"#2C78E4"
    },
    tinyLogo:{
        height:60,
        width:60,
        borderRadius:50,
        marginLeft:100,
        marginTop:20,
        marginBottom:10
    },
    education:{
      height:100,
      width:300,
      backgroundColor:"#F7F7FA",
      // alignItems:'center',
      // justifyContent:"center"
      marginBottom:10
    }
  });
export default profile