import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect, } from 'react';
import { styles } from './styles.js';

import HangmanDrawing from './components/HangmanDrawing.js';
import HangmanWord from './components/HangmanWord.js';
import Keyboardd from './components/Keyboardd.js';


const palavrasAleatorias = ['kiwi'];
 
function App() {

  const [pAleatorias, setPAleatorias] = useState(() => {
    return palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)];
  });

  const [letrasIncorrect, setLetrasIncorrect] = useState([]);

  const incorrect = letrasIncorrect.filter((i) => !pAleatorias.includes(i));

  console.log(`incorrect: ${incorrect}`);
  console.log(`incorrect: ${incorrect.length}`);

  console.log(`letrasIncorrect: ${letrasIncorrect}`);
  console.log(`letrasIncorrect: ${letrasIncorrect.length}`);

  function addLetrasIncorrect(key) {
    if (letrasIncorrect.includes(key)) return
  
    setLetrasIncorrect((letrasIncorrect) => [...letrasIncorrect, key])
  }

  handleLetterPress = (letter) => 
  {
    console.log(`handleLetterPress: ${letter}`);
    addLetrasIncorrect(letter);
  }  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.nada}>{incorrect}</Text>

      <Text style={styles.titulo}>Jogo Da Forca</Text>

      <HangmanDrawing numerosDeErros={incorrect.length} />
      
      <HangmanWord palavra={pAleatorias} guessedLetters={letrasIncorrect} />

      <Keyboardd onLetterPress={this.handleLetterPress} />

    </View>
  );
}

export default App;
