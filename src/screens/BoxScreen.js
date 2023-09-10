import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.ParentViewStyle}>
      <View style={styles.ChildView1Style}></View>
      <View style={styles.ChildView2Style}></View>
      <View style={styles.ChildView3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ParentViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 300,
    alignItems: "flex-start",
  },
  ChildView1Style: {
    width: 100,
    height: 100,
    backgroundColor: "#2a6d7f",
  },
  ChildView2Style: {
    width: 100,
    height: 100,
    backgroundColor: "#2e6a1d",
    // top: 100,
    alignSelf: "center",
  },
  ChildView3Style: {
    width: 100,
    height: 100,
    backgroundColor: "#f6ad81",
  },
});

export default BoxScreen;
