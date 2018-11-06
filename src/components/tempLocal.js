import React, { Component } from 'react';

import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  Button
} from 'react-native';

import axios from 'axios';
import BarraNavegacao from './barraNavegacao';

export default class CenaContatos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      temp: null,
      tempMax: null,
      tempMin: null,
      erro: null,
      
    };
  }

  static navigationOptions ={
    header: null
  }

  callInfo(url){
    axios.get(url)
    .then(response => { 
      this.setState({ name: response.data.name }); 
      this.setState({ temp: parseFloat(response.data.main.temp - 273).toFixed(2) }); 
      this.setState({ tempMax: parseFloat(response.data.main.temp_max - 273).toFixed(2) }); 
      this.setState({ tempMin: parseFloat(response.data.main.temp_min - 273).toFixed(2) }); 


    })
    .catch(() => this.setState({ erro: 'Erro ao recuperar os dados' }))

    //http://api.openweathermap.org/data/2.5/weather?q=petropolis&appid=d999b221af8534377208e8b793d97754
    //'http://api.openweathermap.org/data/2.5/weather?lat=-22.51082806&lon=-43.17776765&appid=d999b221af8534377208e8b793d97754'
    //<Text>Longitude: {this.state.info}</Text>
    //<Text>{ JSON.stringify(this.state.info)}</Text>
  }

  componentDidMount() {
    var lat;
    var long;
    var erro;
    var url;
    
    navigator.geolocation.getCurrentPosition((position) => {

        lat = parseFloat(position.coords.latitude);
        long = parseFloat(position.coords.longitude);
        erro = null;

        url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=d999b221af8534377208e8b793d97754";
        
        this.callInfo(url);
      },
      (erro) => this.setState({ erro: erro.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 },
    );
  }

  render() {

    return (   
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          backgroundColor='#003674'
        />
        <BarraNavegacao corDeFundo='#003674' />

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          
          <Text>Nome: { this.state.name }</Text>
          <Text>Temperatura: { this.state.temp }</Text>
          <Text>Maxima: { this.state.tempMax }</Text>
          <Text>Minima: { this.state.tempMin }</Text>
        </View>

    </View>
    );
  }
}


const styles = StyleSheet.create({
  imgCont: {
    margin: 15,
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 50
  },

  textCont: {
    color: '#61BD8C',
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25
  },

  textBlock: {
    alignItems: 'center'
  },

  textBlock2: {
    alignItems: 'flex-start'
  }

});

