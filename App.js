
import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import { 
  createMinedBoard,
  cloneBoard, 
  congratulationsWinner, 
  openField, 
  hadExplosion,
  showMines,
  invertFlag,
  flagsUsed } from './src/Logic'

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
      Alert.alert('Parabéns! ',' você venceu!.')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = congratulationsWinner(board)

    if(won){
      Alert.alert('Parabéns! ',' você venceu!.')
    }

    this.setState({ board, won })

  }
  
  render(){
    return(
      <View style={styles.container}>
          <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())}/>
          <View style={styles.board}>
            <MineField 
              board={this.state.board} 
              onOpenField={this.onOpenField}
              onSelectField={this.onSelectField}/>
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


