import React from 'react';
import * as cmsActions from '../actions/cmsActions';
import { connect } from 'react-redux';

const FilterLink = ({filter,actions,children}) => {
  return (<a href="#" onClick={e => {
    e.preventDefault();
    actions.setVisibilityFilter({type: 'SET_VISIBILITY_FILTER', filter});
  }}>
    {children}
  </a>);
};

export default FilterLink;
