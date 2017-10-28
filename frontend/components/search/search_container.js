import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPage from './search_component';
import { changePage } from '../../actions/page_actions'
import { getProduct } from '../../actions/collection_actions'

const mapStateToProps = state => ({
  products: state.collections.items.products
})

const mapDispatchToProps = (dispatch) => ({
  selectProduct: (product) => {
    dispatch(getProduct(product));
    dispatch(changePage('product'));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
