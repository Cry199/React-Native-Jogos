import { Text, View, TouchableOpacity, Image, Button} from 'react-native';
import React, { useState } from 'react';

import { styles } from '../styles/styles.js';

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

import imgPa from '../assets/giphy.gif';


function Blocos() {

    const [items, setItems] = useState([
        {id: 0, img: img1, stat: "", nome: 1, showImage: false, isMatched: false},
        {id: 1, img: img1, stat: "", nome: 1, showImage: false, isMatched: false},
        {id: 2, img: img2, stat: "", nome: 2, showImage: false, isMatched: false},
        {id: 3, img: img2, stat: "", nome: 2, showImage: false, isMatched: false},
        {id: 5, img: img3, stat: "", nome: 3, showImage: false, isMatched: false},
        {id: 6, img: img3, stat: "", nome: 3, showImage: false, isMatched: false},
        {id: 7, img: img4, stat: "", nome: 4, showImage: false, isMatched: false},
        {id: 8, img: img4, stat: "", nome: 4, showImage: false, isMatched: false},
        {id: 9, img: img5, stat: "", nome: 5, showImage: false, isMatched: false},
        {id: 10, img: img5, stat: "", nome: 5, showImage: false, isMatched: false},
        {id: 11, img: img6, stat: "", nome: 6, showImage: false, isMatched: false},
        {id: 12, img: img6, stat: "", nome: 6, showImage: false, isMatched: false},
        {id: 13, img: img7, stat: "", nome: 7, showImage: false, isMatched: false},
        {id: 14, img: img7, stat: "", nome: 7, showImage: false, isMatched: false},
        {id: 15, img: img8, stat: "", nome: 8, showImage: false, isMatched:false},
        {id: 16,img :img8 ,stat :"",nome :8 ,showImage :false,isMatched :false},
        {id :17 ,img :img9 ,stat :"",nome :9 ,showImage :false,isMatched :false},
        {id :18 ,img :img9 ,stat :"",nome :9 ,showImage :false,isMatched :false},
        {id :19 ,img :img10 ,stat :"",nome :10 ,showImage :false,isMatched :false},
        {id :20 ,img :img10 ,stat :"",nome :10 ,showImage :false,isMatched :false}

      ].sort(() => Math.random() - 0.5));
 
    const [prevIndex, setPrevIndex] = useState(-1);

    const [isProcessing, setIsProcessing] = useState(false);

    function check( index)
    {
        setIsProcessing(true);

        if(items[index].nome == items[prevIndex].nome)
        {
            items[index].isMatched = true;
            items[prevIndex].isMatched = true;
            setItems([...items]);
            setIsProcessing(false);
            setPrevIndex(-1);
        } 
        else 
        {
            setTimeout(() => 
            {
                items[prevIndex].showImage = false; 
                items[index].showImage = false;
                setItems([...items]);  
                setPrevIndex(-1);
                setIsProcessing(false);
            }, 1000);
        }
    };

    function handleSelection(index) {

        if (isProcessing || items[index].isMatched) {
            return;
        }

        if (isProcessing) {
            return;
        }

        if (prevIndex === index) {
            return;
        }

        items[index].showImage = true;
        setItems([...items]);
        
        if (prevIndex === -1) 
        {
            setPrevIndex(index); 
        } 
        else  
        {
            check(index);
        }
    };

    const allMatched = items.every(item => item.isMatched);

    function handleRestart()
    {
        setItems(
            [
            {id: 0, img: img1, stat: "", nome: 1, showImage: false, isMatched: false},
            {id: 1, img: img1, stat: "", nome: 1, showImage: false, isMatched: false},
            {id: 2, img: img2, stat: "", nome: 2, showImage: false, isMatched: false},
            {id: 3, img: img2, stat: "", nome: 2, showImage: false, isMatched: false},
            {id: 5, img: img3, stat: "", nome: 3, showImage: false, isMatched: false},
            {id: 6, img: img3, stat: "", nome: 3, showImage: false, isMatched: false},
            {id: 7, img: img4, stat: "", nome: 4, showImage: false, isMatched: false},
            {id: 8, img: img4, stat: "", nome: 4, showImage: false, isMatched: false},
            {id: 9, img: img5, stat: "", nome: 5, showImage: false, isMatched: false},
            {id: 10, img: img5, stat: "", nome: 5, showImage: false, isMatched: false},
            {id: 11, img: img6, stat: "", nome: 6, showImage: false, isMatched: false},
            {id: 12, img: img6, stat: "", nome: 6, showImage: false, isMatched: false},
            {id: 13, img: img7, stat: "", nome: 7, showImage: false, isMatched: false},
            {id: 14, img: img7, stat: "", nome: 7, showImage: false, isMatched: false},
            {id: 15, img: img8, stat: "", nome: 8, showImage: false, isMatched:false},
            {id: 16,img :img8 ,stat :"",nome : 8 ,showImage :false,isMatched :false},
            {id :17 ,img :img9 ,stat :"",nome : 9 ,showImage :false,isMatched :false},
            {id :18 ,img :img9 ,stat :"",nome : 9 ,showImage :false,isMatched :false},
            {id :19 ,img :img10 ,stat :"",nome : 10 ,showImage :false,isMatched :false},
            {id :20 ,img :img10 ,stat :"",nome : 10 ,showImage :false,isMatched :false}
    
        ].sort(() => Math.random() - 0.5));
        setPrevIndex(-1);
        setIsProcessing(false);
    };

    return (
        <View style={styles.baseDoJogo}>
        {
            allMatched ? (
                <View style={styles.container}>

                    <Image source={require('../assets/giphy.gif')}  style={styles.imgTela}/>

                    <Text style={styles.titulo2}>Parabéns</Text>
                    <Button title="Jogar novamente" onPress={handleRestart} />
                    
                </View>
            ) : (
                items.map((item, index) => (
                    <TouchableOpacity 
                        key={item.id} 
                        style={[styles.bloco]} 
                        onPress={() => handleSelection(index)}
                        disabled={item.isMatched}
                    >
                        {
                            item.showImage && 
                            <Image
                            source={item.img}
                            style={[styles.img]}
                            />
                        }
                    </TouchableOpacity>
                ))
            )
        }
        </View>
    );
}

export default Blocos;
