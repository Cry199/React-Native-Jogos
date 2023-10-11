import Matter from 'matter-js';
import React from 'react';

import { View, Text, TouchableOpacity, Image} from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import { styles } from './assets/styles/stylesGeral.js';
import Images from './assets/Images.js';

import Bird from './components/Bird.js';
import Constants from './components/Constants/Constants.js';
import Physics, { resetPipes } from './components/Physics.js';
import Floor from './components/Floor.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.gameEngine = null;
    this.entities = this.setupWorld();

    this.state = {
      running: true,
      score: 0,
    };
  }

  setupWorld = () => 
  {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    world.gravity.y = 0.0;

    let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, 
    Constants.MAX_HEIGHT / 2, Constants.BIRD_WIDTH, Constants.BIRD_HEIGHT);

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2, 
      Constants.MAX_HEIGHT - 25, 
      Constants.MAX_WIDTH + 4, 50, 
      { isStatic: true }
    );

    let floor2 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2), 
      Constants.MAX_HEIGHT - 25, 
      Constants.MAX_WIDTH - 4, 50, 
      { isStatic: true }
    );
 

    Matter.World.add(world, [bird, floor1, floor2]);

    Matter.Events.on(engine, 'collisionStart', (event) => {
      var pairs = event.pairs;

      this.gameEngine.dispatch({ type: "game-over" });
    });

    return {
      physics: { engine: engine, world: world },
      bird: { body: bird, pose: 1 ,renderer: Bird },
      floor1: { body: floor1, renderer: Floor},
      floor2: { body: floor2, renderer: Floor},
    }
  };

  onEvent = (e) =>{
    if(e.type === "game-over")
    {
      this.setState({
        running: false
      });
    } else if (e.type === "score") {
      this.setState({
        score: this.state.score + 1
      });
    }
  }

  reset = () => {
    resetPipes();
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true,
      score: 0,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Image source={Images.backGroudDay} style={styles.backgroundImagem} resizeMode="stretch" />

        <GameEngine ref={(ref) => { this.gameEngine = ref; }} 
          style={styles.gameContainer}
          onEvent={this.onEvent}
          running={this.state.running}
          systems={[Physics]}
          entities={this.entities} >
        </GameEngine>

        <Text style={styles.score}>{this.state.score}</Text>

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



