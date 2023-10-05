import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles.js';

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z', 'ç'];

class Keyboardd extends React.Component 
{
  render() 
  {
    return (
      <View style={[styles.baseKeyboard]}>

        {
          alfabeto.map((letter) => (

            <TouchableOpacity key={letter} style={styles.botao}
              onPress={() => this.props.onLetterPress(letter)}> 

              <Text style={styles.letraKeyboard}>{letter}</Text>

            </TouchableOpacity>
          ))
        }

      </View>
    );
  }
}

export default Keyboardd;