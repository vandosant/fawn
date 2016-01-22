import React from 'react';
import Entity from './Entity';

const EntityList = ({
  entities,
  onEntityClick
  }) => (
  <ul>
    {entities.map(entity =>
        <Entity
          key={entity.id}
          {...entity}
          onClick={() => onEntityClick(entity.id)}
          />
    )}
  </ul>
);

export default EntityList;
