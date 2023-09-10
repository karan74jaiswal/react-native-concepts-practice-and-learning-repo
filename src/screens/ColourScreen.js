import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

const randomColourGenerator = () =>
  `rgb(${Math.trunc(Math.random() * (255 - 0) + 0)
    .toString()
    .padStart(3, 0)},${Math.trunc(Math.random() * (255 - 0) + 0)
    .toString()
    .padStart(3, 0)},${Math.trunc(Math.random() * (255 - 0) + 0)
    .toString()
    .padStart(3, 0)})`;

const ColourScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Colour"
        onPress={() => setColors([...colors, randomColourGenerator()])}
      />
      <Button
        title="Remove Colour"
        onPress={() => setColors([...colors].slice(0, -1))}
      />
      <FlatList
        keyExtractor={(item) => item}
        horizontal
        showsVerticalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => (
          // console.log(item);
          <View
            style={{
              backgroundColor: item,
              height: 100,
              width: 100,
              margin: 30,
              borderRadius: 10,
            }}
          ></View>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   style1: {},
// });

export default ColourScreen;
