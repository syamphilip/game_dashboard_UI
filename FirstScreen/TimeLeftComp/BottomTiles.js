import React from "react";
import { View, Text } from "react-native";

export default function BottomTiles(props) {
  return (
    <View
      style={{
        borderRadius: 100,
        borderColor: "orange",
        borderWidth: 2,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2,
      }}
    >
      <Text style={{ color: "orange" }}>{props.number}</Text>
    </View>
  );
}
