import React from 'react';

const Entity = ({
  onClick,
  published,
  text
  }) => (
  <li
    onClick={onClick}
    style={{fontStyle: published ? 'normal' : 'italic'}}
    >
    {text}
  </li>
);

export default Entity;
