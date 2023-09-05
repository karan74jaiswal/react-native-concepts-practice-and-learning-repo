import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const NewScreen = () => {
  const friends = [
    { name: "Friend 1", age: 59 },
    { name: "Friend 2", age: 35 },
    { name: "Friend 3", age: 64 },
    { name: "Friend 4", age: 85 },
    { name: "Friend 5", age: 24 },
    { name: "Friend 6", age: 32 },
    { name: "Friend 7", age: 44 },
    { name: "Friend 8", age: 46 },
    { name: "Friend 9", age: 35 },
    { name: "Friend 10", age: 53 },
    { name: "Friend 11", age: 53 },
    { name: "Friend 12", age: 53 },
  ];

  return (
    <View style={styles.pageStyle}>
      <Text style={styles.listTitleStyle}>
        Here is the list of Friends with their ages😀 -{" "}
      </Text>
      <FlatList
        style={styles.wholeListStyle}
        keyExtractor={({ name }) => name}
        data={friends}
        scrollToOverflowEnabled
        renderItem={({ item: { name, age } }) => (
          <Text style={styles.listContentStyle}>
            {name} - Age {age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listTitleStyle: {
    fontSize: 30,
    padding: 10,
    backgroundColor: "#456",
    color: "#fff",
  },
  listContentStyle: {
    fontSize: 25,
    padding: 15,
    backgroundColor: "#762964",
    color: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  wholeListStyle: {
    backgroundColor: "#829485",
    padding: 10,
    borderRadius: 10,
  },
  pageStyle: {
    backgroundColor: "#6832de",
  },
});

export default NewScreen;
