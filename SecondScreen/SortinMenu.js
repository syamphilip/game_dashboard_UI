import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SortinMenu() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center",

            borderRadius: 50,
            shadowOpacity: 10,
            shadowColor: "black",
            elevation: 5,
            width: "auto",
            padding: 8,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="filter"
              color="black"
              size={20}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Sort & Filter
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "gray",
          width: "100%",
          height: 100,
          opacity: 0.5,
          marginTop: 10,
          borderRadius: 10,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon name="home" color="black" size={30} />
        <Icon name="certificate" color="black" size={30} />
        <Icon name="bell" color="black" size={30} />
        <Icon name="tachometer" color="black" size={30} />
        <Icon name="user" col or="black" size={30} />
      </View>
    </View>
  );
}
