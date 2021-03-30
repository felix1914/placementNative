import React, { Component } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";


const UselessTextInput = (props) => {
  return (
    <View style={{alignSelf:"center"}}>
      <View style={styles.container}>
        <Text>{props.title}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
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
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderTopWidth:0,
    alignSelf:"center"
   
  },
  container: {
    flexDirection: "row",
    // margin: 5,
    // padding: 5,
    width: "80%",
    // margin:10,
    overflow: 'hidden', 
    paddingBottom: 30,
    paddingLeft:10,
    paddingRight:10,
    alignSelf:"center"
  },
 
  error1: {
    color: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:15,
    marginTop:-15,
    marginLeft:10
  },
  alert: {
    marginLeft:10
    // justifyContent: "center",
    // alignItems: "center",

    // alignItems: "flex-start",
  },
});
