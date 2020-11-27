import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default class Operacao extends Component {
  render() {
    return (
      <Picker 
        style={styles.operacao}
        selectedValue={this.props.operacao}
        onValueChange={op => { this.setState({ operacao: op }); }}
      >
        <Picker.Item label='Soma' value="soma" />
        <Picker.Item label='Subtração' value="subtracao" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});
