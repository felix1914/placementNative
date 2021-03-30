import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from ''



const Stack = createStackNavigator();


function App() {
  
  return (
    <NavigationContainer styles={styles.stackNavigate}>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  stackNavigate:{
    backgroundColor:"grey"
  }
})
export default App;
