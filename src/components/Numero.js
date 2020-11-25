import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput style={styles.numero} />
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20,
    backgroundColor: '#F5FFFB',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  }
});
