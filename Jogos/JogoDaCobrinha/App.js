import React, { Component }from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity , Button, Alert} from 'react-native';
import { GameEngine } from "react-native-game-engine"

import { styles } from './assets/styles/stylesGeral.js';
import Constants from './components/Constants.js';
import Head from './components/Head.js';
import GameLoop from './components/GameLoop.js';
import Food from './components/Food.js';
import Tail from './components/Tail.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;

    this.state = {
      running: true,
    }

  }

  onEvent = (e) => {
    if(e.type === "game-over")
    {
      this.setState({
        running: false,
      });
    }
  }

  reset = () => {
    this.engine.swap({
      head: { position: [0,5], xspeed: 1, yspeed: 0, updateFrequency: 10, nextMove: 10, size: Constants.CELL_SIZE, renderer: <Head /> },
      food:{ position: [this.randomBetween(0, Constants.GRID_SIZE - 1),this.randomBetween(0, Constants.GRID_SIZE - 1)],size: Constants.CELL_SIZE, renderer: <Food />},
      tail: { size: Constants.CELL_SIZE, elements: [], renderer: <Tail /> },
    });

    this.setState({
      running: true,
    });

  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar barStyle="dark-content" />
        
        <Text style={styles.titulo}>Jogo da Cobrinha</Text>

        <GameEngine
          ref={(ref) => { this.engine = ref }}
          style={{ width: this.boardSize, height: this.boardSize, flex: null, 
            backgroundColor: '#fff', marginBottom: 30}}
          systems= {[ GameLoop ]}
          entities={{
            head: 
            { 
              position: [0,5], xspeed: 1, yspeed: 0, updateFrequency: 10, 
              nextMove: 10, size: Constants.CELL_SIZE, renderer: <Head /> 
            },

            food:
            {
              position: [this.randomBetween(0, Constants.GRID_SIZE - 1),this.randomBetween(0, Constants.GRID_SIZE - 1)],
              size: Constants.CELL_SIZE, renderer: <Food />
            },
            
            tail: { size: Constants.CELL_SIZE, elements: [], renderer: <Tail /> },
          }}
          onEvent={this.onEvent}
          running={this.state.running}
        />

        {
          !this.state.running ? (
          <TouchableOpacity onPress={this.reset}>

            <Text style={styles.textButton}>Reiniciar</Text>

          </TouchableOpacity> 
          ) : (
            <View style={styles.controls}>
              <View style={styles.controlRow}>

                <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up"}) }}>
                  <View style={styles.control} />
                </TouchableOpacity>

              </View>

              <View style={styles.controlRow}>
                <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left"}) }}>

                  <View style={styles.control} />

                </TouchableOpacity>

                <View style={[styles.control, { backgroundColor: null } ]} />

                <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right"}) }}>

                  <View style={styles.control} />
                  
                </TouchableOpacity>

              </View>

              <View style={styles.controlRow}>

              <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down"}) }}>

                <View style={styles.control} />

              </TouchableOpacity>

            </View>
          </View>
          )
        }

      </View>
    );
  }
}
