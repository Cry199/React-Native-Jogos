import React from 'react';
import Matter from 'matter-js';

import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import { styles } from './assets/styles/stylesGeral.js';
import Constants from './components/Constants/Constants.js';
import Bird from './components/Bird.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.gameEngine = null;
    this.entities = this.setupWorld();
  }

  setupWorld = () => 
  {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, 
    Constants.MAX_HEIGHT / 2, 50, 50);

    Matter.World.add(world, [bird]);

    return {
      physics: { engine: engine, world: world },
      bird: { body: bird, size: [50,50], color: 'red' ,renderer: Bird },
    }

  };
  render() {
    return (
      <View style={styles.container}>
        <GameEngine ref={(ref) => { this.gameEngine = ref; }} style={styles.baseDoJogo}
         entities={this.entities} >
            
        </GameEngine>
      </View>
    );
  }
}



