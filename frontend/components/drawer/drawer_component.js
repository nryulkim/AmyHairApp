import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Footer, FooterTab, Button, Icon
} from 'native-base';

class Drawer extends Component {
  constructor(props){
    super(props);
  }

  handlePress(type){
    return () => {
      this.props.changePage(type);
    }
  }

  render(){
    const { active } = this.props.page;
    return(
      <FooterTab style={styles.container}>
        <Button active={active == 'product'} onPress={this.handlePress('product')}>
          <Icon name='ios-information-circle' />
        </Button>
        <Button active={active == 'list'} onPress={this.handlePress('list')}>
          <Icon name='list' />
        </Button>
        <Button active={active == 'search'} onPress={this.handlePress('search')}>
          <Icon name='ios-search' />
        </Button>
        <Button active={active == 'collection'} onPress={this.handlePress('collection')}>
          <Icon name='ios-apps' />
        </Button>
      </FooterTab>
    )
  }
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#039BE5',
  },
});
