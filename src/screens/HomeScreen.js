import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <Text style={styles.text}>Hello World, This is my first demo app😀!</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
