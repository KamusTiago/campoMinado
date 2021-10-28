
import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import { 
  createMinedBoard,
  cloneBoard, 
  congratulationsWinner, 
  openField, 
  hadExplosion,
  showMines } from './src/Logic'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      winner: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => { 
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = congratulationsWinner(board)

    if (lost) {
      showMines(board)
      Alert.alert('Esse é um jogo do amor', 'da sinceridade e da sorte...')
    }

    if(won){
      Alert.alert('Parabéns! se você é a Evellin me deve um beijo',' se não, vaza.')
    }

    this.setState({ board, lost, won })
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Campo Minado do Amor e da Sinceridade</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
          <View style={styles.board}>
            <MineField board={this.state.board} onOpenField={this.onOpenField}/>
          </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});


