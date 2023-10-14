import React, { Component} from "react";
import { View }  from "react-native";
import Constants from './Constants.js';

export default class Tail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tailList = this.props.elements.map((item, index) => {
            return <View key={index} style={{
                width: this.props.size,
                height: this.props.size,
                backgroundColor: '#49ba69',
                position: 'absolute',
                left: item[0] * this.props.size,
                top: item[1] * this.props.size,
            }} />
        });

        return (
            <View style={{
                width: Constants.GRID_SIZE * this.props.size,
                height: Constants.GRID_SIZE * this.props.size,
                flexDirection: 'row',
            }}>
                {tailList}
            </View>
        );
    }
}