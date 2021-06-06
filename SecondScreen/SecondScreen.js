import React from "react";
import { View, Text, ScrollView } from "react-native";
import Articles from "./Articles";
import SortinMenu from "./SortinMenu";
import TopNavigation from "./TopNavigation";

export default function SecondScreen() {
  return (
    <View>
      <TopNavigation />
      <ScrollView stickyHeaderIndices={[0]} nestedScrollEnabled={true}>
        <SortinMenu />
        <Articles
          title="The medical research and paper: structure and functions"
          author="By Manu"
          content="Evidence-based medicine, whose philosophical origins extend back to mid-19th century."
          by="Research & Development Programme of the Anglia and Oxford Region"
        />
        <Articles
          title="The medical research and paper: structure and functions"
          author="By Manu"
          content="Evidence-based medicine, whose philosophical origins extend back to mid-19th century."
          by="Research & Development Programme of the Anglia and Oxford Region"
        />
        <Articles
          title="The medical research and paper: structure and functions"
          author="By Manu"
          content="Evidence-based medicine, whose philosophical origins extend back to mid-19th century."
          by="Research & Development Programme of the Anglia and Oxford Region"
        />
      </ScrollView>
    </View>
  );
}
