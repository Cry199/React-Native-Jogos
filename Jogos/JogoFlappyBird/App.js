import Matter from 'matter-js';
import React from 'react';

import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import { styles } from './assets/styles/stylesGeral.js';

import Bird from './components/Bird.js';
import Constants from './components/Constants/Constants.js';
import Physics from './components/Physics.js';
import Wall from './components/Wall.js';

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

    let floor = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 25, 
    Constants.MAX_WIDTH, 50, { isStatic: true });

    let ceiling = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, 25, 
    Constants.MAX_WIDTH, { isStatic: true });

    Matter.World.add(world, [bird, floor]);

    return {
      physics: { engine: engine, world: world },
      bird: { body: bird, size: [50,50], color: 'red' ,renderer: Bird },
      floor: { body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall },
      ceiling: { body: ceiling, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall },
    }

  };
  render() {
    return (
      <View style={styles.container}>
        <GameEngine ref={(ref) => { this.gameEngine = ref; }} 
          style={styles.baseDoJogo}
          systems={[Physics]}
          entities={this.entities} >
            
        </GameEngine>
      </View>
    );
  }
}



