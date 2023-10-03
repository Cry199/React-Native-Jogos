import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../styles.js';

class HangmanDrawing extends React.Component {
  render() 
  {
    return (
      <View style={styles.baseTela}>
        
        <View style={styles.head}></View>
        <View style={styles.verticalHeadP}></View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.vertical}></View>
        <View style={styles.baseDoJogo}></View>

      </View>
    );
  }
}

export default HangmanDrawing;