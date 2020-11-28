import React, { Component } from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '10', num2: '25', operacao: 'subtracao' };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    console.log(resultado);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
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
        <Operacao operacao={this.state.operacao} atualizaOperacao={this.atualizaOperacao} />
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
