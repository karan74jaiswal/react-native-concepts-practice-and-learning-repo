import React, { useReducer } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return state + action.payload;
    case "decrease_counter":
      return state - action.payload;
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View style={styles.style1}>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase_counter", payload: 1 })}
        style={styles.buttonStyle}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease_counter", payload: 1 })}
        style={styles.buttonStyle}
      />
      <Text style={styles.labelStyle}>Current Count:</Text>
      <Text style={styles.counterStyle}>{state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  labelStyle: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 30,
  },
  counterStyle: {
    fontSize: 20,
  },
});
export default CounterComponent;
