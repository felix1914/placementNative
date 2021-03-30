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
  const Education=()=>{
    return education.map(data=>{     
      return(
        <View style={styles.education}>
        <Text>{data.field}</Text>
        <Text>{data.institution}</Text>
        <Text>{data.start} - {data.end}</Text>
        </View>

      ) })}
      const Experirnce=()=>{
        return experience.map(data=>{     
          return(
            <View style={styles.education}>
            <Text>{data.title}</Text>
            <Text>{data.company}</Text>
            <Text>{data.from} - {data.to}</Text>
            </View>
    
          ) })}
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
      <Text style={{fontSize: 20,fontWeight:"bold",color:"#2C78E4"}}>Experience</Text>
          {Experirnce()}
      <Text style={{fontSize: 20,fontWeight:"bold",color:"#2C78E4"}}>Education</Text>
          {Education()}

</ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
    fontWeight:"bold",
    marginLeft:120
    },
    tinyLogo:{
        height:60,
        width:60,
        borderRadius:50,
        marginLeft:120,
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