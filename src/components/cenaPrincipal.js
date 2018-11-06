import React, { Component } from 'react';

import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './barraNavegacao';

const logo = require('../imgs/logoTemp.jpg');
const tempBusca = require('../imgs/tempBusca.png');
const tempLocal = require('../imgs/tempLocal.png');


export default class CenaPrincipal extends Component {

  static navigationOptions ={
    header: null
  }

  render() {
    return (   
      <View style={{ flex: 1, backgroundColor: '#e9e9e9' }}>
        <StatusBar
          backgroundColor='#003674'
        />
        <BarraNavegacao corDeFundo='#003674'/>

        <View style={styles.imgLogo}>
            <Image style={styles.imgIcon} source={logo} />
        </View>

        <View style={styles.iconeRow1}>
          <TouchableHighlight 
            underlayColor={'#B9C941'}
            activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('Busca')}
          >
            <Image source={tempBusca} style={styles.icones} />
          </TouchableHighlight >

          <TouchableHighlight
            underlayColor={'#61BD8C'}
            activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('Local')}
          >
            <Image source={tempLocal} style={styles.icones} />
          </TouchableHighlight >
            
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  imgLogo: {
    alignItems: 'center',
    margin: 15,
  },

  iconeRow1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },

  icones: {
    width: 160,
    height: 160,
    borderRadius: 20,
    margin: 12,
  }

});




















