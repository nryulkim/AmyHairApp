import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container, Card, CardItem, Text, Icon
} from 'native-base';
import { windowSize } from '../../util/constants';

class PageList extends Component {
  constructor(props){
    super(props);
    const data = this.getData([]);
    this.state = {
      data: data,
      chosen: []
    };
    this.handlePress = this.handlePress.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.backFunc = this.backFunc.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(nextProps){
    const { chosen } = this.state;
    this.setState({
      data: this.getData(chosen, nextProps)
    })
  }

  getData(chosen, props = this.props){
    const { collections, wigs, prodcuts } = props;
    if(!collections){
      return [];
    }

    let data = Object.keys(collections);
    const type = chosen.length;

    if(type == 0){
      return Object.keys(collections);
    }
    else if (type == 1) {
      return collections[chosen[0]].wigs;
    }
    else if (type == 2) {
      return wigs[chosen[1]].products;
    }
    else if (type == 3) {
      // Selected a final product TODO: Display the product page.
    }
    return [];
  }

  backFunc() {
    let { data, chosen } = this.state;
    chosen.pop();

    this.setState({
      data: this.getData(chosen),
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
            data: this.getData(chosen),
            chosen: chosen
          });
        }
      )
    }
  }

  renderItem(item){
    return(
      <CardItem
        style={ styles.button }
        button onPress={this.handlePress(item)}>
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
        style={{
          width: windowSize.width
        }}
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
    width: windowSize.width
  }
});
