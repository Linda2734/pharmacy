import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Header} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const handlePress = () => {
  navigation.navigate('Search');
};



export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
   
  }

  AddItemScreen = async () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the home screen of the app</Text>
        <TouchableOpacity
        onPress={() =>
          navigate('AddItemScreen')
        }>
          
          title="Go to Brent's profile"
        </TouchableOpacity>
      </View>
    );
  }
  

  render() {
    const Stack = createNativeStackNavigator();
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddItemScreen" component={this.AddItemScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    return (
      
      
    
     <View style={styles.header}>
       
       
      
    

       <Header
          style={styles.header}
          backgroundColor={'#89CFF0'}
          centerComponent={{
            text: 'Pharmacy App',
            style: { color: '#fff', fontSize: 20 },
          }}
          />
    <Text style={styles.text}>Under Construction</Text>
    
        <TouchableOpacity
          style={styles.scanbutton}
          onPress={() =>
            navigation.navigate(this.AddItemScreen)
        }>
        <Text>Go to MyScreen</Text>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          style={styles.scanbutton}
          onPress={() =>navigation.navigate(this.AddItemScreen)}
          >
          <Text style={styles.buttonText}>Check Expiry</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={handlePress}>
        <Text>Go to MyScreen</Text>
        </TouchableOpacity>
    
      
          
          
      </View>

      
      
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "orange",
    fontSize: 30
    
  },

    imageIcon: {
    width: 150,
    height: 150,
    marginLeft:95,
  },

  header:{
    marginBottom:100,

  },
  button: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white"
  },

  button2: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white",
    marginTop:20
  },
  scanbutton: {
    width: 200,
    height: 50,
    backgroundColor: '#5653D4',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  buttonText: {
    color: 'white',
  },

  
});



