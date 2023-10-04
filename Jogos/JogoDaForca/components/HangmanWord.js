import {Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../styles.js';


class HangmanWord extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      palavra: 'abacaxi',
      guessedLetters: ['a', 'j'],
    };
  }

  render() 
  {
    return (
      <View style={[styles.baseTelaPontilhado, { flexWrap: 'wrap' }]}>  
      {this.state.palavra.split('').map((letra, index) => {
        return (
          <Text key={index} style={styles.palavra}>
            <Text style={ [styles.letra, {opacity: this.state.guessedLetters.indexOf(letra) !== -1 ? 1 : 0 }]}>
              {letra}
            </Text>
          </Text>
        );
      })}
    </View>
    );
  }
}

export default HangmanWord;