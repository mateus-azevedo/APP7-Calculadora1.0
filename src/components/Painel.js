import React, { Component } from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '10', num2: '25' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
  }

  calcular() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    console.log(resultado);
  }

  atualizaValor(nomeCampo, numero) {

    const obj = {};
    obj[nomeCampo] = numero;

    this.setState(obj);
  }
  
  render () {
    return (
      <View>
        <Entrada 
          num1={this.state.num1} 
          num2={this.state.num2} 
          atualizaValor={this.atualizaValor} 
        />
        <Operacao />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}

// const Painel = props => (
//   <View>
//     <Entrada />
//     <Operacao />
//     <Comando />
//   </View>
// );

export { Painel }
