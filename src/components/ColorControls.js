import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
const ColorControls = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={onIncrease} />
      <Button title={`Less ${color}`} onPress={onDecrease} />
    </View>
  );
};
export default ColorControls;
