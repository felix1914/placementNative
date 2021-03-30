import React, { useState, Children } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = (props) => {
  const onPress=()=>{
    props.onPress();

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width:"180%"
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  text:{
    fontWeight:"bold"
  }
});

export default Button;
