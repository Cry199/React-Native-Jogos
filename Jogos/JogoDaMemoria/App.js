import { Text, View } from 'react-native';
import React from 'react';

import { styles } from './styles/styles.js';
import Blocos from './components/Blocos.js';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo} >Memory Game</Text>

      <View style={styles.baseDoJogo}>

        <Blocos />

      </View>
      
    </View>
  );
}

