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

  componentDidUpdate(prevProps) {
    if (prevProps.palavra !== this.props.palavra) {
      this.setState({ palavra: this.props.palavra });
    }
    if (prevProps.guessedLetters !== this.props.guessedLetters) {
      this.setState({ guessedLetters: this.props.guessedLetters });
    }
  };

  render() 
  {
    return (
      <View style={[styles.baseTelaPontilhado, { flexWrap: 'wrap' }]}>  
      {
        this.state.palavra.split('').map((letra, index) => {
          const letraAdivinhada = this.state.guessedLetters.includes(letra);
          return (
            <Text key={index} style={styles.palavra} selectable={true}>
              
              {letraAdivinhada ? letra : ' '}
              
            </Text>
          );
        })
      }
    </View>
    );
  }
}

export default HangmanWord;