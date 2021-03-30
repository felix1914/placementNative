import  React, { useState,useEffect } from "react";
import { Text, View ,Image,LogBox,Dimensions} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import Home from "../Components/Welcome/home";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Specifications from "../Components/Specifications/specification";
// import Education from "../Components/Education&Career/education&Career";
// import EducationForm from "../Components/Education&Career/educationForm";
// import ExperienceForm from "../Components/Education&Career/experienceForm";
// import AddContact from "../Components/Contact/AddContact";
// import MyContact from "../Components/Contact/MyContact";
// import Contact from "../Components/Contact/Contact";
import Landing from "../Components/Landing/landing";
import Login from "../Components/Authentication/loginForm.js";
import Verify from "../Components/Authentication/verify.js";
import Signup from '../Components/Authentication/signupForm.js'
import DrawerContent from './Drawer'
import AddInquiry from '../Components/Inquiry/AddInquiry'
import AllInquiry from '../Components/Inquiry/AllInquiry'
import AllInquiries from '../Components/Inquiry/AllInquiries'
import Inquiry from '../Components/Inquiry/Inquiry'
import DailyUpdates from '../Components/DailyUpdates/dailyUpdates'
import AddDailyUpdate from '../Components/DailyUpdates/AddDailyUpdates'
import HomeMaine from '../Components/home/home.js'
import StudentUpdate from '../Components/cards/studentUpdates'
import StudentDetails from '../Components/cards/studentDetails'
// import Profile from '../Components/Profile/profile'
// // import Skills from '../Components/Skills/skills'
// import Chart from '../Components/Chart/chart'
// import PersonalChart from '../Components/Chart/PersonalChat'
// import PersonalProfile from '../Components/Profile/personalProfile'
// import ActionBarImage from './ActionBar'
// import PersonalChatActionBar from './personalChat'
import {getUser} from '../Servises/ApiServices'
import { Entypo } from '@expo/vector-icons'; 
const {width,height}=Dimensions.get('window')
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();




function Tabs() {
  const [user,setUser]= useState({})
  const getUsers=async()=>{
    let result;
    try {
        result = await getUser();
    } catch (e) { }
    try {
        if (result.success) {
          setUser(result.user)
             console.log("user---------",result.user)    
        }
    } catch (e) { }
  }
  useEffect(() => {
    getUsers();
}, []);
  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#CE17E4"
      labelStyle={{ fontSize: 12 }}
      barStyle={screenOptionStyle.TabNav}
      
    >
    
      <Tab.Screen
        name="Home"
        component={HomeMaine}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      {user.admin &&
      <Tab.Screen
        name="Updates"
        component={StudentUpdate}
        options={{
          tabBarLabel: "Update Reports",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />}
     
     {user.admin &&

       <Tab.Screen
        name="Update"
        component={Signup}
        options={{
          tabBarLabel: "Add Students",
          tabBarIcon: ({ color }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
      />}
       {user.admin &&

       <Tab.Screen
        name="Login"
        component={StudentDetails}
        options={{
          tabBarLabel: "Student Details",
          tabBarIcon: ({ color }) => (
            <AntDesign name="deleteusergroup" size={24} color={color} />
            ),
          }}
        />}
     
      {/* <Tab.Screen
      name="Home"
      component={HomeMaine}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    /> */}
       {!user.admin &&

      <Tab.Screen
      name="Specifications"
      component={AddInquiry}
      options={{
        tabBarLabel: "Send Reports",
        tabBarIcon: ({ color }) => (
          <AntDesign name="pluscircleo" size={25} color={color} />
        ),
      }}
    /> }
   
    </Tab.Navigator>
  );
}

function Stacks(props) {
  return (
    <Stack.Navigator initialRouteName=" " screenOptions={screenOptionStyle} >
    <Stack.Screen name=" " component={Home} options={{ headerShown: false }} />
    {/* 1 */}
      <Stack.Screen name="Sign up" component={Signup} options={{ headerShown: false }} />
      {/* 2 */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
     {/* 3 */}
      <Stack.Screen name="Add Inquiry" component={AddInquiry}  />
     {/* 4 */}
      <Stack.Screen name="Home Main" component={HomeMaine,Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="StudentUpdate" component={StudentUpdate} options={{ headerShown: false }} />
     <Stack.Screen name="StudentDetails" component={StudentDetails} options={{ headerShown: false }} />
      
      {/* <Stack.Screen name="Add Daily Updates" component={AddDailyUpdate} options={{ headerLeft: (props) => <ActionBarImage {...props}  /> }} />
      <Stack.Screen name="Daily Updates" component={DailyUpdates} options={{ headerLeft: (props) => <ActionBarImage {...props}  /> }} />
      <Stack.Screen name="Your Inquiry" component={AllInquiry} options={{ headerLeft: (props) => <ActionBarImage {...props} /> }} />
      <Stack.Screen name="All Inquiry" component={AllInquiries} options={{title:"Inquiry", headerLeft: (props) => <ActionBarImage {...props} /> }} />
      <Stack.Screen name="Inquiry" component={Inquiry} options={{ headerLeft: (props) => <ActionBarImage {...props} /> }} />
      <Stack.Screen name="Notification" component={AllInquiries} options={{ headerLeft: (props) => <ActionBarImage {...props} /> }} /> */}
          </Stack.Navigator>
  );
}

export default function App({navigation,route}) {
console.disableYellowBox = true;
  
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF9900",
    alignItem:"center",
    justifyContent:"center",
  },
TabNav:{
    backgroundColor:"white",

},
};