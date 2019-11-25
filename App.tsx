import React, { Component } from "react";
import { View, Image } from "react-native";
import { AudioListComponent } from "./components/AudioListComponent";

export default class AwsomeApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./assets/images/tq.jpg")}
            style={{resizeMode: "contain" }}
          />
        </View>
        <View  style={{ flex: 4 }}>
          <AudioListComponent />
        </View>
      </View>
    );
  }
}
