import React, { Component } from 'react';

import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button
} from 'react-native';

import axios from 'axios';
import BarraNavegacao from './barraNavegacao';

//const detalheCliente = require('../imgs/detalhe_cliente.png');

export default class CenaContatos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      temp: null,
      tempMax: null,
      tempMin: null,
      erro: null,
      cidade: null,
      
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

  getCidadeDados() {
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.cidade + "&appid=d999b221af8534377208e8b793d97754";
        
    this.callInfo(url);
  }

  render() {
    return (   
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          backgroundColor='#003674'
        />
        <BarraNavegacao corDeFundo='#003674' />
        <View>

          <View style={ style.bt }>
            <TextInput
              style={{height: 40, width: 300, marginTop: 30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({cidade: text})}
              value={this.state.cidade}
            />
            <View style={{marginTop: 30, height: 40, width: 200}}>
              <Button
                onPress={() => this.getCidadeDados()}
                title="Go"
                color="#003674"
              />
            </View>
          </View>
          
          <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            
            <Text>Nome: { this.state.name }</Text>
            <Text>Temperatura: { this.state.temp }</Text>
            <Text>Maxima: { this.state.tempMax }</Text>
            <Text>Minima: { this.state.tempMin }</Text>

          </View>

        </View>

      </View>
    );
  }
}


const style = StyleSheet.create({
  bt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  }

});

