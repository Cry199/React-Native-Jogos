import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    controls:{
      width: 300,
      height: 300,
      flexDirection: 'column',
    },
    
    controlRow:{
      width: 300,
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    control:{
      width: 100,
      height: 100,
      backgroundColor: '#fff',
    },

    textButton:{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
  