import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoScreen from './info_component';

const mapStateToProps = state => ({
  product: state.collections.items.products[state.collections.active]
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)
