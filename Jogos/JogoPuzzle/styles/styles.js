import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create(
{ 
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },

  puzzleContainer: {

  },

  row: {
    flexDirection: 'row',
  },

  block: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#111',
  },

  input: {
    margin: 10,
  },

  text: {
    fontSize: 30,
  },

  tenteNv: {
    backgroundColor: '#302b2b',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ec6f66',
    margin: 20,
  },

  titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ec6f66',
    margin: 20,
  },

  img:{
    width: 100,
    height: 100,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  container1:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },

});