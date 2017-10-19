import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container, Card, CardItem, Text, Icon
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
      data: test1,
      chosen: []
    };

    this.handlePress = this.handlePress.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.backFunc = this.backFunc.bind(this);
  }

  backFunc() {
    let { data, chosen } = this.state;
    chosen.pop();
    lastItem = chosen[chosen.length - 1];
    if(!lastItem){
      data = test1
    }
    else{
      data = other[lastItem]
    }
    this.setState({
      data: data,
      chosen: chosen
    });
  }

  handlePress(item){
    let { data, chosen } = this.state;
    if(item == '...'){
      return this.backFunc
    }
    else{
      return (
        () => {
          chosen.push(item)
          this.setState({
            data: other[item],
            chosen: chosen
          });
        }
      )
    }
  }

  renderItem(item){
    return(
      <CardItem style={ styles.button } button onPress={this.handlePress(item)}>
        <Text>{item}</Text>
        <Icon name='ios-arrow-forward'/>
      </CardItem>
    )
  }

  render(){
    let { data, chosen } = this.state;
    if(chosen.length > 0){
      data = data.slice(0);
      data = ['...'].concat(data)
    }
    return(
      <Card
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
  }
});
