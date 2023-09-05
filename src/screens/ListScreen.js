import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const testArr = [1, 2, 3, 4, 5];
  const testArrObj = [
    { name: "Karan" },
    { name: "Kartikey" },
    { name: "Sakshi" },
    { name: "Sakshi1" },
    { name: "Sakshi2" },
    { name: "Sakshi3" },
    { name: "Sakshi4" },
    { name: "Sakshi5" },
  ];
  const friends = [
    { friend: "Friend 1", age: 20 },
    { friend: "Friend 2", age: 45 },
    { friend: "Friend 3", age: 32 },
    { friend: "Friend 4", age: 37 },
    { friend: "Friend 5", age: 27 },
    { friend: "Friend 6", age: 53 },
    { friend: "Friend 7", age: 32 },
    { friend: "Friend 8", age: 32 },
  ];
  return (
    <View>
      {/* <FlatList
        horizontal
        keyExtractor={(el) => el}
        data={testArr}
        renderItem={({ item, index }) => (
          <Text style={styles.textStyle}>
            {item} --- {index}
          </Text>
        )}
        style={styles.listStyle}
      /> */}

      {/* <FlatList
        keyExtractor={({ name }) => name}
        showsVerticalScrollIndicator={false}
        data={testArrObj}
        renderItem={({ item: { name } }) => {
          return <Text style={styles.textStyle}>{name}</Text>;
        }}
        style={styles.listStyle}
      /> */}

      <FlatList
        data={friends}
        renderItem={({ item: { friend, age } }) => (
          <Text style={styles.textStyle}>
            {friend} - Age {age}
          </Text>
        )}
        keyExtractor={({ friend }) => friend}
        style={styles.listStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 25,
    marginTop: 10,
    backgroundColor: "#ad6",
    borderRadius: 10,
  },
  listStyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: "#da5832",
    borderRadius: 10,
  },
});

export default ListScreen;
