import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Footer, FooterTab, Button, Icon
} from 'native-base';


function Drawer(props){
  return(
    <FooterTab style={styles.container}>
      <Button>
        <Icon name='ios-information-circle' />
      </Button>
      <Button>
        <Icon name='list' />
      </Button>
      <Button active>
        <Icon name='ios-search' />
      </Button>
    </FooterTab>
  )
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#039BE5',
  },
});
