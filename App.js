import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/cenaPrincipal';
import TempBusca from './src/components/tempBusca';
import TempLocal from './src/components/tempLocal';

export default class app2 extends Component {
  render() {
    return ( 
      <StackNavigator />
    );
  }
}

const StackNavigator = createStackNavigator({
  Home: CenaPrincipal,
  Busca: TempBusca,
  Local: TempLocal,
});