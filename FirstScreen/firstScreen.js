import React from "react";
import { View } from "react-native";
import Header from "./Header";
import RewardSection from "./RewardSection";
import ThisWeek from "./ThisWeek";
import TimeLeft from "./TimeLeft";

export default function firstScreen() {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Header />
      <ThisWeek />
      <TimeLeft />
      <RewardSection />
    </View>
  );
}
