import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const ReusableComponent = ({ scene, img, score }) => {
  // console.log(img);
  return (
    <View style={styles.style1}>
      <Image source={img} />
      <Text>{scene}</Text>
      <Text>Scenery Score - {score} / 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 45,
    // borderStyle: "solid",
    // borderColor: "#000",
    backgroundColor:
      "#" +
      `${Math.trunc(Math.random() * 9)}${Math.trunc(
        Math.random() * 9
      )}${Math.trunc(Math.random() * 9)}`,
    // color: "#fff",
  },
});

export default ReusableComponent;
