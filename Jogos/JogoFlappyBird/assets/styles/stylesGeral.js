import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
{
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

  