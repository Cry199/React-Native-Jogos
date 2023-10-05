import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2em',
    width: '375px',
  },

  input: {
    direction: 'none',
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

  baseKeyboard:{
    marginTop: 20,
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },

  letraKeyboard:{
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    fontSize: 40,
  },

  botao:{
    width: 50,
    height: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20
  },

  baseDoJogo:{
    height: 10,
    width: 250,
    backgroundColor: '#000',
    marginLeft: 80,
  },

  baseTelaPontilhado:{
    display: 'flex',
    flexDirection: 'row',
    
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  },
  
  palavra:{
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 5,
    borderBottomWidth: 5, 
    borderBottomColor: 'black', 
    borderStyle: 'solid',
    borderColor: 'black',
    height: 50,
    minWidth: 50,
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
    backgroundColor: 'black',
    borderRadius: 50,
    marginLeft: 200,
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },

  corpo:{
    height: 70,
    width: 10,
    backgroundColor: 'black',
    marginLeft: 200,
    position: 'absolute',
    top: 80,
    right: 40,
  },

  bracoEsquerdo:{
    height: 10,
    width: 50,
    backgroundColor: 'black',
    marginLeft: 200,
    position: 'absolute',
    top: 95,
    right: 40,
    transform: 'rotate(45deg)',
  },

  bracoDireito:{
    height: 10,
    width: 50,
    backgroundColor: 'black',
    marginLeft: 200,
    position: 'absolute',
    top: 95,
    right: 0,
    transform: 'rotate(-45deg)',
  },

  pernaEsquerda:{
    height: 10,
    width: 50,
    backgroundColor: 'black',
    marginLeft: 200,
    position: 'absolute',
    top: 159,
    right: 1,
    transform: 'rotate(45deg)',
  },

  pernaDireita:{
    height: 10,
    width: 50,
    backgroundColor: 'black',
    marginLeft: 200,
    position: 'absolute',
    top: 158,
    right: 38,
    transform: 'rotate(-45deg)',
  },


});