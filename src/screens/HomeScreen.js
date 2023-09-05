import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  // console.log("Here is the props Object-");
  // console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>Hello World, This is my first demo app😀!</Text>

      <Button
        title="Go To Components Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("Screen1");
        }}
      ></Button>

      <TouchableOpacity
        style={styles.simpleButtonStyle}
        onPress={() => {
          console.log("Touchable Opacity pressed");
          navigate("List");
        }}
      >
        <Text>Go to List Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.simpleButtonStyle}
        onPress={() => {
          console.log("Touchable Opacity pressed");
          navigate("PracticeScreen");
        }}
      >
        <Text>Go to New Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  simpleButtonStyle: {
    backgroundColor: "#f00",
    color: "#000",
    padding: 10,
    marginTop: 30,
    justifyContent: "center",
  },
});

export default HomeScreen;
