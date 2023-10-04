import { View } from 'react-native';
import React from 'react';
import { styles } from '../styles.js';

class HangmanDrawing extends React.Component {
  render() 
  {
    return (
      <View style={styles.baseTela}>
      
        
        <View style={styles.pernaEsquerda}></View>
        <View style={styles.pernaDireita}></View>
        <View style={styles.bracoDireito}></View>
        <View style={styles.bracoEsquerdo}></View>
        <View style={styles.corpo}></View>
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