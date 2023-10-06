import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button , Image} from 'react-native';
import React, {useState, useEffect, } from 'react';
import { styles } from './styles.js';

import HangmanDrawing from './components/HangmanDrawing.js';
import HangmanWord from './components/HangmanWord.js';
import Keyboardd from './components/Keyboardd.js';


const palavrasAleatorias = ['abacaxi', 'banana', 'computador', 'elefante', 'floresta', 'girassol', 
'hamburguer', 'internet', 'jacare', 'kiwi'];
 
function App() {

  const [pAleatorias, setPAleatorias] = useState(() => {
    return palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)];
  });

  const [letrasIncorrect, setLetrasIncorrect] = useState([]);

  const incorrect = letrasIncorrect.filter((i) => !pAleatorias.includes(i));

  const incorrectString = incorrect.join(' ');

  function addLetrasIncorrect(key) {
    if (letrasIncorrect.includes(key)) return
  
    setLetrasIncorrect((letrasIncorrect) => [...letrasIncorrect, key])
  }

  handleLetterPress = (letter) => 
  {
    addLetrasIncorrect(letter);
  }


  const perdeu = incorrect.length >= 6;
  const ganhou = pAleatorias.split('').every((letter) => letrasIncorrect.includes(letter));

  const handleRestart = () => {
    setLetrasIncorrect([]);
    setPAleatorias(palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)]);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        perdeu || ganhou ?(
          <View style={styles.container}>

            <Image style={{width: 300, height: 200}}
              source={perdeu ? require('./assets/i6JqI0Y.gif') : ganhou ? require('./assets/giphy.gif') : ''} />

            <Text style={styles.titulo}>{perdeu ? 'Você perdeu!' : ganhou ? 'Você ganhou!' : ''}</Text>
            <Button title="Jogar novamente" onPress={handleRestart} />
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.titulo}>Jogo Da Forca</Text>
            <Text style={styles.palavrasErradas}>{incorrectString}</Text>
            <HangmanDrawing numerosDeErros={incorrect.length} />
            <HangmanWord palavra={pAleatorias} guessedLetters={letrasIncorrect} />
            <Keyboardd onLetterPress={this.handleLetterPress} />
          </View>
        )
      }

    </View>
  );
}

export default App;
