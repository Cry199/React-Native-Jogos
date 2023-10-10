import { StyleSheet } from 'react-native';
import Constants from '../../components/Constants/Constants';

export const styles = StyleSheet.create(
{
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    backgroundImagem:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT, 
    },
 
    gameContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    fullScreenButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex:1,
    },

    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    gameOverText: {
        color: 'white',
        fontSize: 48,
    },

    gameOverSubText: {
        color: 'white',
        fontSize: 48,
    },
});

  