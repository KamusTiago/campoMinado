
import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component{
  
  render(){
    return(
      <View style={styles.sectionContainer}>
        <Text style={styles.welcome}>Campo Minado do Amor e da Sinceridade</Text>
        <Text style={styles.Description}>Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>

          <Field/>
          <Field opened/>
          <Field opened nearMines={1}/>
          <Field opened nearMines={2}/>
          <Field opened nearMines={4}/>
          <Field opened nearMines={6}/>
          <Field mined/>
          <Field mined opened/>
          <Field mined opened exploded/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#ffffff'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
  welcome:{
    fontSize:30,
    textAlign: 'center',
    margin: 10,
  }
});


