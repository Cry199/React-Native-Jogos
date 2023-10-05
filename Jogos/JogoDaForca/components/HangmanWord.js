import {Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../styles.js';


class HangmanWord extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      palavra: props.palavra,
      guessedLetters: props.guessedLetters,
    };
  }

  render() 
  {
    return (
      <View style={[styles.baseTelaPontilhado, { flexWrap: 'wrap' }]}>  
      {
        this.state.palavra.split('').map((letra, index) => {
          return (
            <Text key={index} style={styles.palavra}>
              <Text>
                {letra}
              </Text>
            </Text>
          );
        })
      }
    </View>
    );
  }
}

export default HangmanWord;