import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
// Now, Only making a component screen doesnt mean that it will be included in a app, we have to include it manually
import ComponentsScreen from "./src/screens/ComponentsScreen"; //1. Importing the ComponentScreen
import ListScreen from "./src/screens/ListScreen";
import NewScreen from "./src/screens/NewScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen1: ComponentsScreen, // 2. Telling the app that we have a screen called ComponentScreen
    List: ListScreen,
    PracticeScreen: NewScreen,
  },
  {
    initialRouteName: "Home", // 3. Now, as the property says initialRouteName, means the first screen when the app will be opened. Its set on Home and Home is the Homescreen. We will set it to Screen1 so that when App loads We get to see our first component screen.
    defaultNavigationOptions: {
      title: "First Demo App", // To change the title of the app
    },
  }
);

export default createAppContainer(navigator);
