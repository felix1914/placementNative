import React from 'react';
import {View, Image,Text,Dimensions,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const {width,height}=Dimensions.get('window')

const ActionBarImage = (props) => {
console.log("----",props)
  return (
    <View style={{flexDirection: 'row'}}>
     
            <MaterialCommunityIcons name="menu" color='white' size={30} style={{marginLeft:10}} onPress={()=>props.navigation.openDrawer()} />
            <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')} >
            <MaterialCommunityIcons name="bell-outline" color='black' size={30} style={{marginLeft:width/1.25}} />

            </TouchableOpacity>


     
    </View>
  );
};

export default ActionBarImage;