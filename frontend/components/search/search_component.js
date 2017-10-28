import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Header
} from 'native-base';
import { styles } from '../../util/constants';

class SearchPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { product } = this.props;
    return(
      <Header>
      </Header>
    );
  }
}

export default SearchPage;
