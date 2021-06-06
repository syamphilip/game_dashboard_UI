import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: 110,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, color: "white" }}>Hello</Text>
          <Text style={styles.profileText}>Manu</Text>
        </View>

        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "white",
            alignSelf: "flex-start",
            borderRadius: 100,
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Icon name="search" size={25} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
