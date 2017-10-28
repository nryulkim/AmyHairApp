import React, { Component } from 'react';
import {
  StyleSheet, AsyncStorage
} from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge
} from 'native-base';
import { windowSize } from '../util/constants'
import Drawer from './drawer/drawer_container';
import List from './list/list_container';

export default class Root extends Component {
  constructor(props){
    super(props);
    this.getCollectionsFromStorage = this.getCollectionsFromStorage.bind(this);
    this.handleSync = this.handleSync.bind(this);
  }

  componentWillMount(){
    this.getCollectionsFromStorage();
  }

  getCollectionsFromStorage() {
    const { receiveAllCollections } = this.props;

    AsyncStorage.getItem('@amystore:collections').then((collections) => {
      receiveAllCollections(JSON.parse(collections));
    }).done()
  }

  getContent(){
    const { active } = this.props.page;
    switch(active){
      case 'product':
        return;
      case 'list':
        return <List/>;
      case 'search':
        return;
    }
  }

  handleSync(){
    this.props.getAllCollections()
  }

  render() {
    const { active } = this.props.page;
    return (
      <Container style={{width: windowSize.width}}>
        <Header style={styles.header}>
          <Title style={styles.title}>Amy Hair</Title>
          <Button transparent onPress={ this.handleSync }>
            <Icon name='ios-sync'/>
          </Button>
        </Header>
        <Content style={styles.content}>
          { this.getContent() }
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
