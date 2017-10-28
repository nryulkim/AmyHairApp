import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageList from './list_component';

const mapStateToProps = state => ({
  active: state.collections.active,
  collections: state.collections.items.collections,
  wigs: state.collections.items.wigs,
  products: state.collections.items.products
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PageList)
