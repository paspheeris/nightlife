import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { SEARCH_FORM_SUBMIT } from '../constants/actionTypes.js';

import SearchForm from './SearchForm';
import BarList from './BarList';
import Map from './Map';

const propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchFormValue: PropTypes.string.isRequired
}

const defaultProps = {
  searchFormValue: ''
}

const MainView = ({ searchFormSubmit, searchFormValue, bars, latLngs, center, hoverMarker }) => (
  <div className="mainview-wrapper">
    <div className="mainview-left-group">
      <SearchForm className="search-form" searchFormSubmit={searchFormSubmit} searchFormValue={searchFormValue} />
      <BarList bars={bars} />
    </div>
    <div className="mainview-right-group">
      <Map latLngs={latLngs} center={center} hoverMarker={hoverMarker} />
    </div>
  </div>
)
const mapDispatchToProps = dispatch => ({
  searchFormSubmit: payload =>
    dispatch({ type: SEARCH_FORM_SUBMIT, payload })
})
const mapStateToProps = state => {
  return ({
    searchFormValue: state.searchForm.value,
    bars: state.bars,
    latLngs: state.location.latLngs,
    center: state.location.center,
    hoverMarker: state.ui.hoverMarker
  })
}
MainView.propTypes = propTypes

MainView.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(MainView);

