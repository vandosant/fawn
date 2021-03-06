import React, {PropTypes} from 'react';
import FilterLink from './FilterLink';
import EntityList from './EntityList';

const getPublishedEntities = (entities = [], filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return entities;
    case 'SHOW_PUBLISHED':
      return entities.filter(
          e => e.published
      );
    case 'SHOW_UNPUBLISHED':
      return entities.filter(
          e => !e.published
      );
  }
};

let nextEntityId = 0;
class CmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.addEntity = this.props.actions.addEntity.bind(this);
    this.save = this.save.bind(this);
    this.validate = this.validate.bind(this);
    this.settings = {};
  }

  save() {
    this.props.actions.addEntity(this.props.cmsAppState, this.input.value, nextEntityId++);
    this.settings = {};
    this.input.value = "";
  }

  validate() {
    this.settings.text = this.input.value;
    return true;
  }

  render() {
    const {
      actions,
      visibilityFilter,
      cmsAppState
      } = this.props;
    const visibleEntities = getPublishedEntities(cmsAppState, visibilityFilter);
    return (
      <div>
        <input ref={node => {this.input = node;}} type="text" value={this.settings.text}
               onChange={this.validate}/><input type="submit"
                                                value="Save"
                                                onClick={this.save}/>
        <EntityList entities={visibleEntities}
                    onEntityClick={id => this.props.actions.toggleEntity(this.props.cmsAppState, id)}/>

        <p>
          Show:
          {' '}
          <FilterLink filter="SHOW_ALL" actions={actions}
                      currentFilter={visibilityFilter}>All</FilterLink>
          {' '}
          <FilterLink filter="SHOW_PUBLISHED" actions={actions}
                      currentFilter={visibilityFilter}>Published</FilterLink>
          {' '}
          <FilterLink filter="SHOW_UNPUBLISHED" actions={actions}
                      currentFilter={visibilityFilter}>Unpublished</FilterLink>
        </p>
      </div>
    );
  }
}

CmsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default CmsApp;
