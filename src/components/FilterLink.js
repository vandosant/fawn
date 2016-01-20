import React from 'react';
import * as cmsActions from '../actions/cmsActions';

const FilterLink = ({filter, children}) => {
  return (<a href="#" onClick={e => {
    e.preventDefault();
    this.props.actions.visibilityFilter(this.props.cmsAppState, filter);
  }}>
    {children}
  </a>);
};

export default FilterLink;
