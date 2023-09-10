import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const NameScreen = () => {
  const [state, setState] = useState("");
  return (
    <View style={styles.ScreenStyle}>
      <Text style={styles.InputLabelStyle}>Enter Name:</Text>
      <TextInput
        style={styles.InputFieldStyle}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        value={state}
        onChangeText={(value) => setState(value)}
      />
      <Text style={styles.NameStyle}>My Name is {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenStyle: {
    marginLeft: 20,
    // alignItems: "center",
  },
  InputLabelStyle: {
    fontSize: 30,
  },
  NameStyle: {
    marginTop: 30,
    fontSize: 25,
  },
  InputFieldStyle: {
    backgroundColor: "#fff",
    borderColor: "#000",
    maxWidth: 320,
    height: 50,
    // fontWeight: "bold",
    // marginLeft: 20,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 25,
  },
});

export default NameScreen;
