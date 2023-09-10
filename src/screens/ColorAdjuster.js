import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import ColorControls from "../components/ColorControls";
const ColorAdjuster = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  let color = `rgb(${red.toString().padStart(3, 0)},${green
    .toString()
    .padStart(3, 0)},${blue.toString().padStart(3, 0)})`;
  const ADJUST_COLOR_VALUE = 10;
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorControls
        color={"Red"}
        onIncrease={() => setColor("red", ADJUST_COLOR_VALUE)}
        onDecrease={() => setColor("red", -1 * ADJUST_COLOR_VALUE)}
      />
      <ColorControls
        color={"Green"}
        onIncrease={() => setColor("green", ADJUST_COLOR_VALUE)}
        onDecrease={() => setColor("green", -1 * ADJUST_COLOR_VALUE)}
      />
      <ColorControls
        color={"Blue"}
        onIncrease={() => setColor("blue", ADJUST_COLOR_VALUE)}
        onDecrease={() => setColor("blue", -1 * ADJUST_COLOR_VALUE)}
      />

      <View
        style={{
          backgroundColor: color,
          height: 150,
          width: 150,
          marginLeft: 30,
          marginTop: 30,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default ColorAdjuster;
