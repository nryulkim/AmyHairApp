import React, { Component } from 'react';
import {
  StyleSheet, AsyncStorage, Alert
} from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge
} from 'native-base';
import { windowSize, styles } from '../util/constants'
import Drawer from './drawer/drawer_container';
import List from './list/list_container';
import InfoScreen from './info/info_container';
import SearchPage from './search/search_container';

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
        return <InfoScreen/>;
      case 'list':
        return <List/>;
      case 'search':
        return <SearchPage/>;
    }
  }

  handleSync(){
    Alert.alert(
      'Sync Data',
      'Would you like to sync your data?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: this.props.getAllCollections},
      ],
      { cancelable: false }
    )
  }

  render() {
    const { active } = this.props.page;
    return (
      <Container style={{width: windowSize.width}}>
        <Header style={styles.main_header}>
          <Title style={styles.main_title}>Amy Hair</Title>
          <Button transparent onPress={ this.handleSync }>
            <Icon name='ios-sync'/>
          </Button>
        </Header>
        <Content style={styles.main_content}>
          { this.getContent() }
        </Content>
        <Footer style={styles.main_footer}>
          <Drawer></Drawer>
        </Footer>
      </Container>
    );
  }
}
