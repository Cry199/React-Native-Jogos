import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from './styles.js';

import HangmanDrawing from './components/HangmanDrawing.js';
import HangmanWord from './components/HangmanWord.js';
import Keyboard from './components/Keyboard.js';


const palavrasAleatorias = ['abacaxi', 'banana', 'computador', 'elefante', 
'floresta', 'girassol', 'hamburguer', 'internet', 'jacaré', 'kiwi'];


function App() {

  const [pAleatorias, setPAleatorias] = useState(() => {
    return palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)];
  });

  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const incorrect = letrasCorretas.filter(letra => !pAleatorias.includes(letra));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Jogo Da Forca</Text>

      <HangmanDrawing numerosDeErros={incorrect.length}/>
      
      <HangmanWord palavra={pAleatorias} />

      <Keyboard />  

    </View>
  );
}


export default App;