import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from './drawer_component';
import { changePage } from '../../actions/page_actions'

const mapStateToProps = state => ({
  page: state.page
})

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => { dispatch(changePage(page))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
