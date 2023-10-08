import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, SectionList } from 'react-native';
import { styles } from './styles/styles';

import { images, allImages} from './components/images.js';

import img3Final from './assets/Fotos3/Teste.jpg';
import img2Final from './assets/Fotos2/transferir1.jpg';
import img1Final from './assets/Fotos1/transferir.jpg';

const Puzzle = () => 
{
  const initialPuzzle = [
    [images[0], images[1], images[2], images[3]],
    [images[4], images[5], images[6], images[7]],
    [images[8], images[9], images[10], images[11]],
    [images[12], images[13], images[14], null]
  ];

  const [puzzle, setPuzzle] = useState(shufflePuzzle());


  function shufflePuzzle() {

    const images = allImages[Math.floor(Math.random() * allImages.length)];

    const initialPuzzle = [
      [images[0], images[1], images[2], images[3]],
      [images[4], images[5], images[6], images[7]],
      [images[8], images[9], images[10], images[11]],
      [images[12], images[13], images[14], null]
    ];

    let newPuzzle = [...initialPuzzle].flat();
    for (let i = newPuzzle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPuzzle[i], newPuzzle[j]] = [newPuzzle[j], newPuzzle[i]];
    }
    return chunkArray(newPuzzle);
  };

  function chunkArray(array) {
    return Array.from({ length: Math.ceil(array.length / 4) }, (v, i) =>
      array.slice(i * 4, i * 4 + 4)
    );
  };

  function isPuzzleComplete() {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if (puzzle[i][j] !== initialPuzzle[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  const [gameOver, setGameOver] = useState(false);
  const [gameOver1, setGameOver1] = useState(false);
  
  useEffect(() => {
    if (isPuzzleComplete()) {
      setGameOver(true);
    }
  }, [puzzle]);

  const swap = (a, b) => {
    let tempPuzzle = [...puzzle];
    let temp = tempPuzzle[a[0]][a[1]];
    tempPuzzle[a[0]][a[1]] = tempPuzzle[b[0]][b[1]];
    tempPuzzle[b[0]][b[1]] = temp;
    setPuzzle(tempPuzzle);
  };

  const checkAdjacent = (i, j) => {
    if (puzzle[i][j - 1] === null) swap([i, j], [i, j - 1]);
    else if (puzzle[i][j + 1] === null) swap([i, j], [i, j + 1]);
    else if (puzzle[i - 1]?.[j] === null) swap([i, j], [i - 1, j]);
    else if (puzzle[i + 1]?.[j] === null) swap([i, j], [i + 1, j]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Image source={img3Final} style={styles.img} />
        <Image source={img2Final} style={styles.img} />
        <Image source={img1Final} style={styles.img} />
      </View>


      <Text style={styles.titulo}>Puzzle Game</Text>

      {
        gameOver ? (
          <View>
            <Text style={styles.titulo}>Boa</Text>
            <TouchableOpacity onPress={() => setPuzzle(shufflePuzzle())}>
              <Text style={styles.titulo}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>

        ) : (
          <View style={styles.puzzleContainer}>
            {
              puzzle.map((row, i) => {
                return (
                  <View key={i} style={styles.row}>
                    {
                      row.map((item, j) => {
                        return (
                          <TouchableOpacity
                            key={j}
                            style={styles.block}
                            onPress={() => checkAdjacent(i, j)}
                          >
                            {item && <Image source={item} style={{width: 100, height: 100}} />}

                          </TouchableOpacity>
                        );
                      })
                    }
                  </View>
                );
              })
            }
          </View>
        )
      }

      <View style={styles.tenteNv}>
            <TouchableOpacity onPress={() => setPuzzle(shufflePuzzle())}>
              <Text style={styles.titulo}>Jogar</Text>
            </TouchableOpacity>
      </View>

    </View>
  );
};

export default Puzzle;
