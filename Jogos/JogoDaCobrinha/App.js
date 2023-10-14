import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GameEngine } from "react-native-game-engine"

import { styles } from './assets/styles/stylesGeral.js';

export default function App() 
{


  return (
    <View style={styles.container}>

      <Text>Começando</Text>

      <StatusBar style="auto" />
    </View>
  );
}
