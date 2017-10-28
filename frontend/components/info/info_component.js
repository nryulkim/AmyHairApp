import React, { Component } from 'react';
import {
  Container, Card, CardItem, Text, Body
} from 'native-base';
import { styles } from '../../util/constants';

class InfoScreen extends Component {
  constructor(props){
    super(props);
    this.getName = this.getName.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getName(){
    const { product } = this.props;
    return product ? product.object.name : 'Select a product.';
  }

  getInfo(){
    const { product } = this.props;
    if(product){
      return (
        <CardItem>
          <Body>
            <Text>Collection: {product.collection}</Text>
            <Text>Wig: {product.wig}</Text>
          </Body>
        </CardItem>
      )
    }
  }

  render(){
    const { product } = this.props;
    return(
      <Card>
        <CardItem header>
          <Text style={styles.title}>{this.getName()}</Text>
        </CardItem>
        {this.getInfo()}
      </Card>
    );
  }
}

export default InfoScreen;
