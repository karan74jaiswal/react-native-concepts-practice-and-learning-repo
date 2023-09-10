// Implementing same Color Adjuster using useReducer()
import React, { useReducer } from "react";
import { View, TouchableOpacity } from "react-native";
import ColorControls from "../components/ColorControls";

const reducer = (state, action) => {
  const MAX_COLOR_VALUE = 255;
  const MIN_COLOR_VALUE = 0;
  switch (action.type) {
    case "change_red":
      return {
        ...state,
        red:
          state.red + action.payload >= MAX_COLOR_VALUE
            ? MAX_COLOR_VALUE
            : state.red + action.payload <= MIN_COLOR_VALUE
            ? MIN_COLOR_VALUE
            : state.red + action.payload,
      };
    case "change_green":
      return {
        ...state,
        green:
          state.green + action.payload >= MAX_COLOR_VALUE
            ? MAX_COLOR_VALUE
            : state.green + action.payload <= MIN_COLOR_VALUE
            ? MIN_COLOR_VALUE
            : state.green + action.payload,
      };
    case "change_blue":
      return {
        ...state,
        blue:
          state.blue + action.payload >= MAX_COLOR_VALUE
            ? MAX_COLOR_VALUE
            : state.blue + action.payload <= MIN_COLOR_VALUE
            ? MIN_COLOR_VALUE
            : state.blue + action.payload,
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  const ADJUST_COLOR_VALUE = 10;
  let color = `rgb(${red.toString().padStart(3, 0)},${green
    .toString()
    .padStart(3, 0)},${blue.toString().padStart(3, 0)})`;

  return (
    <View>
      <ColorControls
        color={"Red"}
        onIncrease={() =>
          dispatch({ type: "change_red", payload: ADJUST_COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * ADJUST_COLOR_VALUE })
        }
      />
      <ColorControls
        color={"Green"}
        onIncrease={() =>
          dispatch({ type: "change_green", payload: ADJUST_COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * ADJUST_COLOR_VALUE })
        }
      />
      <ColorControls
        color={"Blue"}
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: ADJUST_COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * ADJUST_COLOR_VALUE })
        }
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

export default SquareScreen;
