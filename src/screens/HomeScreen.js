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
      <Button
        title="Go To Image Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("PracticeScreen2");
        }}
      ></Button>
      <Button
        title="Go To Counter Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("Counter");
        }}
      ></Button>
      <Button
        title="Go To Colour Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("ColourGenerator");
        }}
      ></Button>
      <Button
        title="Go To Colour Adjustor"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("ColorAdjust");
        }}
      ></Button>
      <Button
        title="Go To Square Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("Square");
        }}
      ></Button>
      <Button
        title="Go To Name Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("Name");
        }}
      ></Button>
      <Button
        title="Go To Password Test Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("PasswordScreen");
        }}
      ></Button>

      <Button
        title="Go To Box Screen"
        onPress={() => {
          console.log("Simple Button Pressed");
          navigate("Box");
        }}
      ></Button>
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
