import { Text, View, TouchableOpacity,Image} from 'react-native';

import React, { useState, useEffect, useRef } from 'react';

import { styles } from './styles/styles';

import img1 from './assets/SemFundo.png';


export default function App() 
{
  const [scoreEz, setScoreEz] = useState(0);

  const [scoreTemp, setScoreTemp] = useState(0);

  const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * 12));

  const timerRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(60);

  const [modo, setModo] = useState(1500);

  function modeDeJogo(item)
  {
    if (item == 1)
    {
      setModo(1500);
    }

    if (item == 2)
    {
      setModo(500);
    }

    if (item == 3)
    {
      setModo(200);
    }
  }

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } 
    else
    {
      setMoleIndex(-1);
      setScoreTemp(scoreEz);
      setScoreEz(0);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setMoleIndex(Math.floor(Math.random() * 9));
      }, modo);
      return () => clearTimeout(timer);
    }
  }, [moleIndex, timeLeft, modo]);

  const click = (index) => 
  {
    if (index === moleIndex) 
    {
      setScoreEz(scoreEz + 10);

      clearTimeout(timerRef.current);

      setTimeout(() => 
      {
        setMoleIndex(Math.floor(Math.random() * 12));
      }, 100);
    }else 
    {
      setScoreEz(scoreEz - 5);
    }
  };

  const restartGame = () => {
    setScoreEz(0);
    setTimeLeft(60);
    setMoleIndex(Math.floor(Math.random() * 12));
  };

  return (
    <View style={styles.container}>

      <View style={styles.fundoC}>

        <Text style={styles.titulo2}>Ultima pontuação:</Text>

        <Text style={styles.score}>{scoreTemp}</Text>

      </View>

      <Text style={styles.titulo}>Whack A Mole</Text>
      
      <View style={styles.fundoA}>

        <Text style={styles.score}>SCORE: {scoreEz}</Text>

        <Text style={styles.score}>Time: {timeLeft}</Text>

      </View>

      {
        timeLeft === 0 ? (
          <View style={styles.fundoB}>
            <TouchableOpacity onPress={restartGame}>
              <Text style={styles.restartButton}>Reiniciar</Text>
            </TouchableOpacity>

            <Text style={styles.titulo2}>Escolha o modo de jogo:</Text>

            <View style={styles.row}>

              <TouchableOpacity onPress={() => modeDeJogo(1)}>
                <Text style={styles.modeButtons}>Fácil</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => modeDeJogo(2)}>
                <Text style={styles.modeButtons}>Médio</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => modeDeJogo(3)}>
                <Text style={styles.modeButtons}> Difícil</Text>
              </TouchableOpacity>

            </View>

          </View>
        ) : (
          <View style={styles.baseDojogo}>

            {
              Array(12).fill().map((_, index) => (
                <TouchableOpacity key={index} style={styles.hole} onPress={() => click(index)}>
                  
                  {
                    index === moleIndex && <Image source={img1} style={styles.mole} />
                  }

                </TouchableOpacity>
              ))
            }

          </View>
        )
      }

    </View>
  );
}
