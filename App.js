import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import FirstScreen from "./FirstScreen/firstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";

export default function App() {
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={{ flex: 1, backgroundColor: "#77529F", height: windowHeight }}
      >
        <FirstScreen />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          height: windowHeight,
          padding: 20,
        }}
      >
        <SecondScreen />
      </View>
    </ScrollView>
  );
}
