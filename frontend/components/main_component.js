import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge
} from 'native-base';
import windowSize from '../util/constants'
import Drawer from './drawer/drawer_container';

export default class Root extends Component {
  render() {
    return (
      <Container style={{width: windowSize.width}}>
        <Header style={styles.header}>
          <Title style={styles.title}>Amy Hair</Title>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>
        <Content style={styles.content}>
        </Content>
        <Footer style={styles.footer}>
          <Drawer></Drawer>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    backgroundColor: '#039BE5',
    height: 76
  },
  title: {
    fontSize: 26,
    padding: 15
  },
  content: {
  },
  footer: {
    backgroundColor: '#039BE5',
  }
});
