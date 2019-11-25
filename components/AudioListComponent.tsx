import React, { Component } from "react";
import { AudioButton } from "./AudioComponent";
import { View } from "react-native";
import { AudioConfiguration } from "../Configuration/AudioConfiguration";

export class AudioListComponent extends Component {
  render() {

    var clips = AudioConfiguration.map(function(data) {
        return (
            { clipId: data.id, clipName: data.clipName, clipFile: data.clipFile }
        );
      });

    var clipList = clips.map(function(clip) {
      return (
        <AudioButton
          key={clip.clipId}
          clipName={clip.clipName}
          clipFile={clip.clipFile}
        ></AudioButton>
      );
    });

    return <View style={{flexDirection:'row', flexWrap:'wrap', alignContent:'center', justifyContent:'center'}}>{clipList}</View>;
  }
}
