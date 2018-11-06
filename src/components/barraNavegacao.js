import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


export default class BarraNavegacao extends Component {
  render() {
    return (   
      <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },

  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF'
    
  }

});

