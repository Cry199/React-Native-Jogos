import { Text, View, Alert, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './assets/styles/stylesGeral.js';

import Constants from './components/Constants/Constants.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start aasdaour app!</Text>
      </View>
    );
  }
}


