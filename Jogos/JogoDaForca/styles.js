import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    margin: 20,
  },

  baseTela:{
    position : 'relative',
  },

  baseDoJogo:{
    height: 10,
    width: 250,
    backgroundColor: '#000',
    marginLeft: 80,
  },

  vertical:{
    height: 250,
    width: 10,
    backgroundColor: '#000',
    marginLeft: 150,
  },

  horizontalLine:{
    width: 140,
    height: 10,
    backgroundColor: '#000',
    position: 'absolute',
    right: 40,
    top: 0,
  },

  verticalHeadP:{
    height: 50,
    width: 10,
    backgroundColor: '#000',
    marginLeft: 190,
    position: 'absolute',
    top: 0,
    right: 40,
  },

  head:{
    height: 50,
    width: 50,
    border: "10px solid black",
    borderRadius: 50,
    marginLeft: 200,
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
},



});