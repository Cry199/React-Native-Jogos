import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../styles/styles.js';
import Bloco from './Bloco.js';

import img1 from '../assets/1.gif';
import img2 from '../assets/2.gif';
import img3 from '../assets/3.gif';
import img4 from '../assets/4.gif';
import img5 from '../assets/5.gif';
import img6 from '../assets/6.gif';
import img7 from '../assets/7.gif';
import img8 from '../assets/8.gif';
import img9 from '../assets/9.gif';
import img10 from '../assets/10.gif';


function Blocos() {

    const [items, setItems] = useState([
        {id: 1, img: img1, stat: ""},
        {id: 1, img: img1, stat: ""},
        {id: 2, img: img2, stat: ""},
        {id: 2, img: img2, stat: ""},
        {id: 3, img: img3, stat: ""},
        {id: 3, img: img3, stat: ""},
        {id: 4, img: img4, stat: ""},
        {id: 4, img: img4, stat: ""},
        {id: 5, img: img5, stat: ""},
        {id: 5, img: img5, stat: ""},
        {id: 6, img: img6, stat: ""},
        {id: 6, img: img6, stat: ""},
        {id: 7, img: img7, stat: ""},
        {id: 7, img: img7, stat: ""},
        {id: 8, img: img8, stat: ""},
        {id: 8, img: img8, stat: ""},
        {id: 9, img: img9, stat: ""},
        {id: 9, img: img9, stat: ""},
        {id: 10,img :img10, stat: ""},
        {id: 10,img :img10, stat: ""}
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState([0]);

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat= "Boa";
            items[prev].stat= "Boa";
            
            blocoCurrent.onCorrect(); 
            blocoPrev.onCorrect();
        } else {
            items[current].stat= "Ruim";
            items[prev].stat= "Ruim";
            
            blocoCurrent.onWrong();
            blocoPrev.onWrong();
        }
    };

    function handleSelection(id){
        if(prev === 0)
        {
            items[id].stat = "atual";
            setItems([...items]);
            setPrev(id);
        }else{
            check(id);
        }
        
    };

    return (
      <View style={styles.baseDoJogo}>
          {
              items.map((item, index) => (
                <Bloco 
                onCorrect={onCorrect}
                onWrong={onWrong}
              />
              ))
          }
      </View>
    );
}

export default Blocos;
