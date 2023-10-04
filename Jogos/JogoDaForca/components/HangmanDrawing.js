import {Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../styles.js';


const pernaEsquerdaStyle = styles.pernaEsquerda;
const pernaDireitaStyle = styles.pernaDireita;
const bracoDireitoStyle = styles.bracoDireito;
const bracoEsquerdoStyle = styles.bracoEsquerdo;
const corpoStyle = styles.corpo;
const headStyle = styles.head;




class HangmanDrawing extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      numerosDeErros: props.numerosDeErros,
    };
  }

  render() 
  {
    return (
      <View style={styles.baseTela}>
      
        
        <View style={pernaEsquerdaStyle}></View>
        <View style={pernaDireitaStyle}></View>
        <View style={bracoDireitoStyle}></View>
        <View style={bracoEsquerdoStyle}></View>
        <View style={corpoStyle}></View>
        <View style={headStyle}></View>

        <View style={styles.verticalHeadP}></View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.vertical}></View>
        <View style={styles.baseDoJogo}></View>

      </View>
    );
  }
}

export default HangmanDrawing;