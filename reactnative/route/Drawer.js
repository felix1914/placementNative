import React,{useEffect,useState} from 'react';
import { View, StyleSheet,AsyncStorage,TouchableOpacity,Dimensions} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Image
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {getUserId} from '../Servises/ApiServices'

const {width,height}=Dimensions.get('window')

  function DrawerContent(props) {
      const [name,setName]=useState('')
      const [department,setDepartment]=useState('')
      useEffect(()=>{
        getUserId('department').then(res=>{
          console.log("dep",res)
          setDepartment(JSON.parse(res))
        })
      })
    
    useEffect(()=>{
       
          const getName = async () => {
            const fetchData = await getUserId('name'); // fetchDailyData() is calling Api 
            setName(JSON.parse(fetchData));
          }

          getName()
    })

    return(
        <View style={{flex:1,backgroundColor:"white",marginTop:-30}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <TouchableOpacity style={{marginTop: 15,backgroundColor:"#FF9900",flexDirection:"row"}} onPress={()=>props.navigation.navigate('Landing')}>
                            <Avatar.Image 
                                source={require('../assets/avt.jpg')}
                                size={60}
                                style={{margin:10,backgroundColor:"#FF9900",flex:0.7}}
                                
                            />
                            <View style={{marginLeft:15,marginTop:15}}>
                                <Title style={styles.title}>KEVIN</Title>
                                
                            </View>
                        </TouchableOpacity>

                       
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    {department==='Network'?
                    <View>
                                           <DrawerItem 
                           
                           label="Daily Updates"
                           onPress={() => {props.navigation.navigate('Daily Updates')}}
                       />
                    <DrawerItem 
                           
                           label="Inquiry"
                           onPress={() => {props.navigation.navigate('All Inquiry')}}
                       />
                       <DrawerItem 
                          label="Notification"
                           onPress={() => {props.navigation.navigate('Notification')}}
                       />

                       <DrawerItem 
                           
                           label="Logout"
                           onPress={() => {props.navigation.navigate('Login')}}
                       />
                    </View>:
                    <View> 
                            <DrawerItem 
                           
                           label="My Inquiry"
                           onPress={() => {props.navigation.navigate('Your Inquiry')}}
                       />
                       <DrawerItem 
                          label="Notification"
                           onPress={() => {props.navigation.navigate('Notification')}}
                       />
                       <DrawerItem 
                           
                           label="Daily Updates"
                           onPress={() => {props.navigation.navigate('Daily Updates')}}
                       />
                       <DrawerItem 
                           
                           label="Logout"
                           onPress={() => {props.navigation.navigate('Login')}}
                       /></View>}

               
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView> 
            
        </View>
    );
} 
export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      
    },
    userInfoSection: {
      backgroundColor:"#FF9900",
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:"white",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
  