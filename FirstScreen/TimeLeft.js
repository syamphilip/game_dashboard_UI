import React from "react";
import { View, Text, Image } from "react-native";
import Coin from "../assets/M.png";
import Fire from "../assets/fire.png";
import BottomTiles from "./TimeLeftComp/BottomTiles";
export default function TimeLeft() {
  return (
    <View
      style={{
        marginTop: 50,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: 210,
          width: "30%",
          backgroundColor: "white",
          borderRadius: 10,
          shadowColor: "black",
          elevation: 15,
        }}
      >
        <View style={{ flex: 2, alignItems: "center", paddingTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>02h</Text>
          <Text style={{ color: "gray" }}>time left</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FF437F",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            10h
          </Text>
          <Text style={{ color: "white" }}>spent</Text>
        </View>
      </View>

      <View
        style={{
          height: 210,
          width: "60%",
          backgroundColor: "white",
          borderRadius: 10,
          shadowColor: "black",
          elevation: 15,
          marginLeft: 30,
          padding: 15,
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}
              >
                2,450
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "black" }}
              >
                total points
              </Text>
            </View>
            <View>
              <View
                style={{
                  borderRadius: 100,
                  borderColor: "orange",
                  borderWidth: 5,
                  height: 90,
                  width: 90,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={Coin} style={{ height: 30, width: 30 }} />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 120,
            }}
          >
            <BottomTiles number={1} />
            <BottomTiles number={2} />
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
              <Image source={Fire} style={{ height: 15, width: 15 }} />
            </View>
            <BottomTiles number={4} />
            <BottomTiles number={5} />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                backgroundColor: "orange",
                height: 10,
                width: 10,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 2,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
}
