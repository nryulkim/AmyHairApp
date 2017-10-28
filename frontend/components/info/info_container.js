import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoScreen from './info_component';

const mapStateToProps = state => {
  if(state.collections.items.products){
    return ({
      product: state.collections.items.products[state.collections.active]
    })
  }
  else{
    return ({
      product: undefined
    })
  }

}
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)
