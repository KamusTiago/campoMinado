
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params'

export default class App extends Component{
  render(){
    return(
      <View /*style={styles.container}*/>
        <Text /*style={styles.welcome}*/>Campo Minado do amor e da sinceridade</Text>
        <Text>Tamanho da grade:
        {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   welcome:{
//     fontSize:30,
//     textAlign: 'center',
//     margin: 10,
//   }
// });

