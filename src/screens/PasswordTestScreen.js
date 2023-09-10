import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const PasswordTestScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.ScreenStyle}>
      <Text style={styles.InputLabelStyle}>Enter Password:</Text>
      <TextInput
        style={styles.InputFieldStyle}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {password.length < 5 ? (
        <Text style={styles.WarningStyle}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
      <Text style={styles.NameStyle}>{password}</Text>
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
    marginTop: 20,
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
  WarningStyle: {
    fontSize: 20,
  },
});

export default PasswordTestScreen;
