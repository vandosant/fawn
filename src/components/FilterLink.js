import React from 'react';
import * as cmsActions from '../actions/cmsActions';
import { connect } from 'react-redux';

const FilterLink = ({filter,actions,children}) => {
  return (<a href="#" onClick={e => {
    e.preventDefault();
    actions.setVisibilityFilter(filter);
  }}>
    {children}
  </a>);
};

export default FilterLink;
