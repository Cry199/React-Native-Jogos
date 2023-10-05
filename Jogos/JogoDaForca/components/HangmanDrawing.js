import {Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../styles.js';


const pernaEsquerdaStyle = styles.pernaEsquerda;
const pernaDireitaStyle = styles.pernaDireita;
const bracoDireitoStyle = styles.bracoDireito;
const bracoEsquerdoStyle = styles.bracoEsquerdo;
const corpoStyle = styles.corpo;
const headStyle = styles.head;

const corpoTodo = [headStyle, corpoStyle, bracoEsquerdoStyle, bracoDireitoStyle, pernaEsquerdaStyle, pernaDireitaStyle];

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
      
        {
          corpoTodo.map((item, index) => {
            if (index < this.state.numerosDeErros) {
              return <View key={index} style={item}></View>;
            }
          })
        }

        <View style={styles.verticalHeadP}></View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.vertical}></View>
        <View style={styles.baseDoJogo}></View>

      </View>
    );
  }
}

export default HangmanDrawing;