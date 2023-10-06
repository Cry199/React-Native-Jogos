import { Text, View , TouchableOpacity, Image, Animated } from 'react-native';
import React, { useRef } from 'react';

import { styles } from '../styles/styles.js';

function Bloco() {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const scale = useRef(new Animated.Value(1)).current;

    const onCorrect = () => {
        Animated.timing(scale, {
          toValue: 0,
          duration: 200 
        }).start();
      }

      const onWrong = () => {
        Animated.timing(scale, {
          toValue: 0,  
          duration: 200
        }).start();
      }
      

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const fading = {
        opacity: fadeAnim
    };

    return (
        <TouchableOpacity style={[styles.bloco]} onPress={() => {handleSelection(id); fadeIn();}}>
            <Animated.Image
                style={{
                transform: [
                { scale }
                        ]
                }}
            />    
        </TouchableOpacity>
    );
};

export default Bloco;
