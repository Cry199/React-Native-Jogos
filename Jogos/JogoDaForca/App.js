import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { styles } from './styles.js';

import HangmanDrawing from './components/HangmanDrawing.js';
import HangmanWord from './components/HangmanWord.js';
import Keyboard from './components/Keyboard.js';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Jogo Da Forca</Text>

      <HangmanDrawing />
      
      <HangmanWord />

      <Keyboard />  

    </View>
  );
}


export default App;