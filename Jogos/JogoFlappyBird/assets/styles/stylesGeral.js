import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
{
    container: {
        flex: 1,
        backgroundColor: '#34cdeb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        margin: 20,
    },

    imgTela:{
        width: '95%',
        height: '50%',
    },

    titulo2: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
        margin: 20,
    },

    baseDoJogo:{
        backgroundColor: '#34cdeb',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        width:'95%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bloco:{
        width: 90,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    },

    img:{
        width: 80,
        height: 80,
    },

    botao:{
        backgroundColor: 'white',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },


});
  