import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./Components/Welcome/home";
import Route from "./route/route";
// import Drawer from './route/Drawer'


export default class Cat extends React.Component {
  render() {
    
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:"white"
        }}
      >
      {/* <Drawer /> */}
        <Route />
      </View>
    );
  }
}

