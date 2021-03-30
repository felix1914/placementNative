import React, { Component } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import LinearGradient from "../LinearGradient/linearGradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { block } from "react-native-reanimated";

const UselessTextInput = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          {...props}
        ></TextInput>
      </View>
      {props.error ? (
        <View style={styles.alert}>
          <Text style={styles.error1}>{props.error}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default UselessTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "white",
    color: "grey",
    padding: 10,
    flex: 1,
   
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    width: "70%",
  },
 
  error1: {
    color: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    marginLeft:-60
    // justifyContent: "center",
    // alignItems: "center",

    // alignItems: "flex-start",
  },
});
