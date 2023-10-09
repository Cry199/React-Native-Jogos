import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create( 
{
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a8100', // #3a8100 // #3aa00a
        display: 'flex',
        flexDirection: 'column',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        margin: '2%',
    },

    score: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        margin: '2%',
    },

    baseDojogo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '89%',
        height: '50%',
        flexWrap: 'wrap',
        backgroundColor: '#3a8100',
        borderRadius: 10,
        margin: '2%',
    },

    hole: {
        width: 100,
        height: 100,
        backgroundColor: '#a5550b',
        margin: '2%',
        marginTop: '5%',
        borderRadius: 100,
        position: 'relative',
        overflow: 'hidden',
    },

    mole: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: '5%',
        position: 'absolute',
        bottom: 0,
    },

    modeButtons: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        margin: '2%',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fundoA: {
        backgroundColor: '#3aa00a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 10,
    },

    fundoB: {
        backgroundColor: '#3aa00a',
        borderRadius: 10,
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fundoC: {
        backgroundColor: '#3aa00a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 10,
    },

    titulo2: {
        fontSize: 33,
        color: '#fff',
        margin: '3%',
    },

    restartButton: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        margin: '2%',
    },
});
  