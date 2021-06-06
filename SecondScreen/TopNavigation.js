import React from "react";
import { View, Text } from "react-native";

export default function TopNavigation() {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#F5F5FC",
        marginTop: 30,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 5,
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text style={{ fontWeight: "100" }}>Promotional</Text>
      </View>
      <View
        style={{
          height: "100%",
          width: "auto",
          backgroundColor: "white",
          justifyContent: "center",
          paddingHorizontal: 50,
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 5,
          elevation: 2,
        }}
      >
        <Text style={{ fontWeight: "100" }}>Academics</Text>
      </View>
    </View>
  );
}
