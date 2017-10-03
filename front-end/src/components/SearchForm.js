import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIs from '../asyncActions.js';
import { Input } from 'semantic-ui-react';

const propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchFormValue: PropTypes.string.isRequired
}

const defaultProps = {
  searchFormValue: ''
}
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: ''
    };
  }
  render() {
    return (
      <form className="search-form" onSubmit={this.hur}>
        <Input fluid type="text" value={this.state.value} placeholder="enter a location, eg 'oakland'" icon="search" onKeyDown={this.handleKeyDown} />
      </form>
    )
  }
  handleKeyDown = (event) => {
    this.setState({ formText: event.target.value });
  }
  hur = (event) => {
    event.preventDefault();
    const payload = APIs.Yelp.getBars(this.state.formText);
    this.props.searchFormSubmit(payload);
  };
}
SearchForm.propTypes = propTypes

SearchForm.defaultProps = defaultProps

export default SearchForm;
