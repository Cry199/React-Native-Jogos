import React, { Component } from "react";
import { View } from "react-native";

export default class Cactus extends Component {
    render(){
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        return(
            <View style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 100,
                height: 100,
                margin: 0,
                backgroundColor: 'blue',
            }} />
        )
    }
}