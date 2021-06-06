import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ThisWeek() {
  return (
    <View
      style={{
        marginTop: 120,
      }}
    >
      <Text style={{ color: "white", fontSize: 15 }}>This Week</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "white",
          width: "100%",
          height: 50,
          borderRadius: 50,
          marginTop: 10,
          justifyContent: "space-around",
          padding: 20,
          shadowRadius: 10,
          shadowColor: "black",
          elevation: 15,
        }}
      >
        <View>
          <View style={{ flexWrap: "wrap", justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>12</Text>
            <Text style={{ fontSize: 18 }}>/12</Text>
          </View>
        </View>

        <View>
          <View style={{ flexWrap: "wrap", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: "gray" }}>
              games left to play
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 15, marginHorizontal: 10 }}
            >
              Play Now
            </Text>
            <Icon name="arrow-right" color="black" size={15} />
          </View>
        </View>
      </View>
    </View>
  );
}
