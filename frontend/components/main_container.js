import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllCollections, receiveAllCollections
} from '../actions/collection_actions'
import Main from './main_component';

const mapStateToProps = state => ({
  collections: state.collections,
  page: state.page
})

const mapDispatchToProps = (dispatch) => ({
  getAllCollections: () => { dispatch(getAllCollections()); },
  receiveAllCollections: (collections) => {
    dispatch(receiveAllCollections(collections));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
