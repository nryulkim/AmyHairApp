import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllCollections} from '../actions/collection_actions'
import Main from './main_component';

const mapStateToProps = state => ({
  collections: state.collections,
  page: state.page
})

const mapDispatchToProps = (dispatch) => ({
  getAllCollections: () => { dispatch(getAllCollections()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
