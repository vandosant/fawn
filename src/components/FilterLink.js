import React from 'react';
import * as cmsActions from '../actions/cmsActions';
import { connect } from 'react-redux';

const FilterLink = ({filter, children}) => {
  return (<a href="#" onClick={e => {
    e.preventDefault();
    this.props.actions.visibilityFilter(this.props.cmsAppState, filter);
  }}>
    {children}
  </a>);
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.filter;
    default:
      return state;
  }
};

import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return { cmsAppState: state.cmsAppState };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ visibilityFilter }, dispatch);
}

connect(mapStateToProps, mapDispatchToProps)(FilterLink);

export default FilterLink;
