import React from "react";
import { View, Text, Image } from "react-native";
import TitleImage from "../assets/image.png";
import Logo from "../assets/avatar.png";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Articles(props) {
  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: "#F5F5FC",
        width: "100%",
        borderRadius: 10,
      }}
    >
      <Image source={TitleImage} style={{ width: "100%" }} />
      <View
        style={{
          backgroundColor: "#F5F5FC",
          paddingTop: 5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{ fontWeight: "bold", textAlign: "justify", fontSize: 18 }}
        >
          {props.title}
        </Text>

        <Text
          style={{
            fontWeight: "100",
            textAlign: "justify",
            fontSize: 14,
            marginTop: 15,
          }}
        >
          {props.author}
        </Text>

        <Text
          style={{
            fontWeight: "100",
            textAlign: "justify",
            fontSize: 14,
            marginTop: 15,
          }}
        >
          {props.content}
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            justifyContent: "center",
            flexDirection: "row",
            paddingHorizontal: 30,
          }}
        >
          <Image source={Logo} style={{ marginRight: 10 }} />
          <Text style={{ textAlign: "justify", color: "gray" }}>
            {props.by}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Icon
            name="sticky-note"
            color="gray"
            size={20}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "gray" }}>256 people read</Text>
        </View>
      </View>
    </View>
  );
}
