import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Root extends Component {
  render() {
    return (
      <View>
        <Button
          title="Up"
          onPress={() => console.log('up')}/>
        <Button
          title="Down"
          onPress={() => console.log('down')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
