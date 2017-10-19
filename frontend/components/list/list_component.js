import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  List, Button, Text, Icon
} from 'native-base';

const test1 = ['Hello', 'Bye']
const other = {
  Hello: ['my', 'this'],
  Bye: ['bye'],
  my: ['name'],
  this: ['is']
}

class PageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: test1
    };

    this.handlePress = this.handlePress.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handlePress(item){
    return (
      () => {
        this.setState({data: other[item]});
      }
    )
  }

  renderItem(item){
    return(
      <Button block bordered dark style={ styles.button } onPress={this.handlePress(item)}>
        <Text>{item}</Text>
        <Icon name='ios-arrow-forward'/>
      </Button>
    )
  }

  render(){
    const { data } = this.state;
    return(
      <List
        dataArray={ data }
        renderRow={ this.renderItem }
        />
    );
  }
}

export default PageList;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-between',
    backgroundColor: '#ececec',
    height: 76,
    marginBottom: 1
  }
});
