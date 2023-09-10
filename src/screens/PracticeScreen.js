import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ReusableComponent from "../components/ReusableComponent.js";
const PracticeScreen = () => {
  const scenery = [
    {
      scene: "Mountains",
      imgSource: require("../../assets/mountain.jpg"),
      score: Math.trunc(Math.random() * 10),
    },
    {
      scene: "Beach",
      imgSource: require("../../assets/beach.jpg"),
      score: Math.trunc(Math.random() * 10),
    },
    {
      scene: "Forest",
      imgSource: require("../../assets/forest.jpg"),
      score: Math.trunc(Math.random() * 10),
    },
  ];
  return (
    <View>
      <FlatList
        data={scenery}
        renderItem={({ item: { scene, imgSource, score } }) => (
          <ReusableComponent scene={scene} img={imgSource} score={score} />
        )}
        keyExtractor={({ scene }) => scene}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   style1: {
//     // display: "flex",
//     backgroundColor: "#00ff00",
//   },
// });
export default PracticeScreen;
