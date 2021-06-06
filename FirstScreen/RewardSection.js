import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Event from "../assets/Event.png";
import Opp from "../assets/Opp.png";
import Talks from "../assets/Talks.png";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RewardSection() {
  return (
    <View style={{ marginTop: 50, fontSize: 15 }}>
      <Text style={{ color: "white" }}>Rewards to redeem</Text>

      <ScrollView
        contentContainerStyle={{ flexDirection: "row" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tiles}>
          <Image source={Event} />
          <Text
            style={{
              marginHorizontal: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            5/8 Events
          </Text>
        </View>

        <View style={styles.tiles}>
          <Image source={Talks} />
          <Text
            style={{
              marginHorizontal: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            0/8 Talks
          </Text>
        </View>

        <View style={styles.tiles}>
          <Image source={Opp} />
          <Text
            style={{
              marginHorizontal: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            5/8 Events
          </Text>
        </View>

        <View style={styles.tiles}>
          <Image source={Event} />
          <Text
            style={{
              marginHorizontal: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            5/8 Events
          </Text>
        </View>
      </ScrollView>
      <View
        style={{ flex: 1, flexGrow: 1, alignItems: "center", marginTop: 40 }}
      >
        <View
          style={{
            borderRadius: 100,
            borderWidth: 5,
            borderColor: "white",
            height: 80,
            width: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="arrow-down" size={35} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tiles: {
    flexDirection: "row",
    backgroundColor: "white",
    opacity: 0.5,
    height: 40,
    width: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 5,
  },
});
