import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [tela,setTela] = useState('menu');

  const [jogador,setJogador] = useState('');
  
  const [tabuleiro,setTabuleiro] = useState([]);

  const [numeroJogadas,setNumeroJogadas] = useState(0);

  const [vencedor,setVencedor] = useState('');

  function iniciarJogo(jogadorSelecionado)
  {
    setJogador(jogadorSelecionado);

    setNumeroJogadas(9);
    setTabuleiro([
      ['','',''],
      ['','',''],
      ['','','']
    ]);

    setTela('jogo');
  }

  function iniciar(numeroColuna,numeroLinha)
  {
    tabuleiro[numeroLinha][numeroColuna] = jogador;

    setTabuleiro([...tabuleiro]);

    setJogador(jogador === 'X' ? 'O' : 'X');

    verificarVencedor(tabuleiro, numeroLinha, numeroColuna);

  }

  function verificarVencedor(tabuleiro, linha, coluna)
  {
    // Verificar linhas
    if(tabuleiro[linha][0] === tabuleiro[linha][1] && tabuleiro[linha][1] === tabuleiro[linha][2] && tabuleiro[linha][0] !== '')
    {
      return finalizarJogo(tabuleiro[linha][0]);
    }

    // Verificar colunas
    if(tabuleiro[0][coluna] === tabuleiro[1][coluna] && tabuleiro[1][coluna] === tabuleiro[2][coluna] && tabuleiro[0][coluna] !== '')
    {
      return finalizarJogo(tabuleiro[0][coluna]);
    }

    // Verificar diagonal principal
    if(tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '')
    {
      return finalizarJogo(tabuleiro[0][0]);
    }

    // Verificar diagonal secundaria
    if(tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '')
    {
      return finalizarJogo(tabuleiro[0][2]);
    }

    // Nem um vencedor
    if(numeroJogadas - 1 === 0)
    {
      return finalizarJogo('Ninguem');
    }

    // jogo não finalizado
    setNumeroJogadas(numeroJogadas - 1);
  }

  function finalizarJogo(jogadorVencedor)
  {
    setVencedor(jogadorVencedor);

    setTela('Resultado');
  }

  switch(tela)
  {
    case 'menu':
      return getTelaMenu();
    case 'jogo':
      return getTelaJogo();
    case 'Resultado':
      return getTelaResultado();
  }

  function getTelaMenu()
  {
    return(
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Jogo Da Velha</Text>

        <Text style={styles.subtitulo}>Selecione o primeiro Jogador</Text>

        <View style={styles.inlineItems}>

          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('X')}>
            
            <Text style={styles.jogardorX}>X</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('O')}>

            <Text style={styles.jogardorO}>O</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function getTelaJogo()
  {
    return(
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Jogo Da Velha</Text>

        {
          tabuleiro.map((linha,numeroLinha) => {
            return (
              <View key={numeroLinha} style={styles.inlineItems}>

                {
                  linha.map((valor,numeroColuna) => {
                    return(
                      <TouchableOpacity key={numeroColuna} style={styles.boxJogador} 
                      onPress={() => iniciar(numeroColuna,numeroLinha)} disabled={valor !== ''}>

                        <Text style={valor === 'X' ? styles.jogardorX : styles.jogardorO}>{valor}</Text>

                      </TouchableOpacity>
                    )
                  })
                }

              </View>
            )
          })
        }

        <TouchableOpacity style={styles.botaoMenu} onPress={() => setTela('menu')}>

          <Text style={styles.botaoMenuTexto}>voltar ao menu</Text>

        </TouchableOpacity>

      </View>
    );
  }

  function getTelaResultado()
  {
    return(
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Jogo Da Velha</Text>

        <Text style={styles.subtitulo}>Resultado Final</Text>

        <Text style={styles.ganhador}>{vencedor === 'Ninguem' ? 'Nem um vencedor' : '' + vencedor}</Text>

        <TouchableOpacity style={styles.botaoMenu} onPress={() => setTela('menu')}>

          <Text style={styles.botaoMenuTexto}>voltar ao menu</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },

  subtitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20
  }, 

  boxJogador:{
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20
  },

  jogardorX:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000'
  },

  jogardorO:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#da3f3f'
  },

  inlineItems:{
    flexDirection: 'row'
  },

  botaoMenu:{
    backgroundColor: '#000',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  botaoMenuTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  ganhador:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20

  },

});
