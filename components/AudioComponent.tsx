import React, { Component } from "react";
import { Audio } from "expo-av";
import { View, Button } from "react-native";

export class AudioButton extends Component {
  constructor(props) {
    super(props);

    this.state.buttonName = props.clipName;
    this.state.clipFile = props.clipFile;
  }

  state = {
    buttonName: "",
    clipFile: undefined
  };

  render() {
    return (
      <View style={{padding: 10}}>
        <Button
          onPress={() => {
            this.playAudio();
          }}
          title={this.state.buttonName}
        />
      </View>
    );
  }

  async playAudio() {
    const soundObject = new Audio.Sound();
    try {        
      await soundObject.loadAsync(this.state.clipFile);
      await soundObject.playAsync();
    } catch (error) {
        alert("error")
        console.log(error)
    }
  }
}
