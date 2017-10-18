import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';
import Main from './components/main_container.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Main/>
      </Provider>
    );
  }
}
