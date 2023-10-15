import Matter from "matter-js";
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GameEngine } from "react-native-game-engine"

import Constants from './components/Constants';
import { styles } from './assets/style/stylesGeral';
import Physics from './components/Physics';
import Dino from './components/Dino';
import Floor1 from './components/Floor1';
import Cactus from './components/Cactus';

export const randomBetween = (min, max) => 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateCactus = (floorHeight, maxHeight, cactusHeight) => {
  const minDistanceFromFloor = 50;
  const minHeight = floorHeight + minDistanceFromFloor;
  const maxHeightAboveFloor = maxHeight - minHeight;

  const generateCactus = randomBetween(minHeight, minHeight + maxHeightAboveFloor);

  return generateCactus;
}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.gameEngine = null;

    this.state = {
      running: true,
    };

    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
  
    let dinoX = Constants.MAX_WIDTH / 5;
    let dinoY = Constants.MAX_HEIGHT - 300;
    let dino = Matter.Bodies.rectangle(dinoX, dinoY, 50, 50, { label: 'dino' });
    dino.isJumping = false;
  
    let floorY = Constants.MAX_HEIGHT - 300;
    let floorX = Constants.MAX_WIDTH / 2;
    let floor = Matter.Bodies.rectangle(floorX, floorY, Constants.MAX_WIDTH, 50, { isStatic: true, label: 'floor' });

    let cactus1X = Constants.MAX_WIDTH * 3;
    const cactusWidth1 = randomBetween(20, 80);
    const cactusHeight1 = 125; 
    let cactus1Y = floorY - cactusHeight1 / 2
    let cactus1 = Matter.Bodies.rectangle(cactus1X, cactus1Y, cactusWidth1, cactusHeight1, { isStatic: true, label: 'cactus' });

    let cactus2X = Constants.MAX_WIDTH * 3;
    const cactusWidth2 = randomBetween(20, 80);
    const cactusHeight2 = 125; 
    let cactus2Y = floorY - cactusHeight2 / 2
    let cactus2 = Matter.Bodies.rectangle(cactus2X, cactus2Y, cactusWidth2, cactusHeight2, { isStatic: true, label: 'cactus' });
    
    let cactus3X = Constants.MAX_WIDTH * 3;
    const cactusWidth3 = randomBetween(20, 80);
    const cactusHeight3 = 125; 
    let cactus3Y = floorY - cactusHeight3 / 2
    let cactus3 = Matter.Bodies.rectangle(cactus3X, cactus3Y, cactusWidth3, cactusHeight3, { isStatic: true, label: 'cactus' });

    let cactus4X = Constants.MAX_WIDTH * 3;
    const cactusWidth4 = randomBetween(20, 80);
    const cactusHeight4 = 125; 
    let cactus4Y = floorY - cactusHeight4 / 2
    let cactus4 = Matter.Bodies.rectangle(cactus4X, cactus4Y, cactusWidth4, cactusHeight4, { isStatic: true, label: 'cactus' });
  
    Matter.World.add(world, [dino, floor, cactus1, cactus2, cactus3, cactus4]);

    Matter.Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach((collision) => {
        this.gameEngine.dispatch({ type: 'collision', bodyA: collision.bodyA, bodyB: collision.bodyB });
      }
    )
    });
  
    return {
      physics: { engine: engine, world: world },

      dino: { body: dino, size: [50, 50], color: 'red', renderer: Dino},

      floor: { body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Floor1 },

      cactus1: { body: cactus1, size: [cactusWidth1, cactusHeight1], color: 'blue', renderer: Cactus },
      cactus2: { body: cactus2, size: [cactusWidth2, cactusHeight2], color: 'blue', renderer: Cactus },
      cactus3: { body: cactus3, size: [cactusWidth3, cactusHeight3], color: 'blue', renderer: Cactus },
      cactus4: { body: cactus4, size: [cactusWidth4, cactusHeight4], color: 'blue', renderer: Cactus },
    };
  }
  
  onEvent = (e) => {
    if (e.type === 'collision') {
      if (e.bodyA && e.bodyB) {
        if ((e.bodyA.label === 'dino' && e.bodyB.label.startsWith('cactus')) ||
            (e.bodyB.label === 'dino' && e.bodyA.label.startsWith('cactus'))) {
          this.setState({running: false});
        }
      }
    }
  };

  reset = () => {
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <GameEngine ref={(ref) => { this.gameEngine = ref; }} 
          style={styles.gameContainer}
          onEvent={this.onEvent}
          running={this.state.running}
          systems={[Physics]}
          entities={this.entities} >
        </GameEngine>

        {
          !this.state.running &&
          <TouchableOpacity style={styles.fullScreenButton} onPress={() => {this.reset()}}>

            <View style={styles.fullScreen}>

              <Text style={styles.gameOverText}>Game Over</Text>
              <Text style={styles.gameOverSubText}>Jogar novamente?</Text>

            </View>

          </TouchableOpacity>
        }

      </View>
    );
  }
}
