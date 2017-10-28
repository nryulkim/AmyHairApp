import React, { Component } from 'react';
import {
  Container, Header, Item, Icon, Input, List, ListItem, Text
} from 'native-base';
import { styles } from '../../util/constants';

class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      suggestions: []
    }
    this.handleText = this.handleText.bind(this);
    this.handleSuggestions = this.handleSuggestions.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  getSuggestions(text){
    const { products } = this.props;
    if(text == ''){
      return [];
    }

    const productNames = Object.keys(products);
    return productNames.filter((name) => {
      return name.toLowerCase().startsWith(text.toLowerCase());
    })
  }

  handleText(text){
    this.setState({
      text,
      suggestions: this.getSuggestions(text)
    });
  }

  handleOnPress(text){
    const { selectProduct } = this.props;
    return () => {selectProduct(text)}
  }

  handleSuggestions(text){
    return (
      <ListItem style={styles.search_listitem}
        button onPress={this.handleOnPress(text)}>
        <Text>{text}</Text>
      </ListItem>
    )
  }

  render(){
    const { product } = this.props;
    const { text, suggestions } = this.state;
    return(
      <Container>
        <Header searchBar rounded style={styles.search_container}>
          <Item style={{height: 66}}>
            <Icon name="ios-search" />
            <Input style={{height: 66}}
              placeholder="Search"
              onChangeText={this.handleText}
              value={text}/>
          </Item>
        </Header>
        <List
          dataArray={suggestions}
          renderRow={this.handleSuggestions}
          />
      </Container>
    );
  }
}

export default SearchPage;
