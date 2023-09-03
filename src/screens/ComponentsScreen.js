// 1. Importing Libraries needed to Create a Component.
import React from "react"; // React Library Takes care of how component s will be made and how they will work with each other
import { Text, StyleSheet, View } from "react-native"; // react-native library will take care of taking data from the components and render it on the moile screen

// 2. Creating a Component/Function
const ComponentsScreen = () => {
  const yourName = "Karan";
  const realName = "Kartikey";
  // const yourName = <Text>Karan</Text>;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.firstTextStyle}>
        Getting Started with React Native!
      </Text>
      <Text style={styles.secondTextStyle}>
        My name is {Math.random() > 0.5 ? yourName : realName}
      </Text>
    </View>
  );
};

// 3. Creating a StyleSheet for styling the component
const styles = StyleSheet.create({
  viewStyle: { backgroundColor: "#938" },
  firstTextStyle: { fontSize: 45, padding: 40 },
  secondTextStyle: { fontSize: 20, padding: 40 },
});

// 4. Exporting the component so that it can be used anywhere in the project like in other components
export default ComponentsScreen;
