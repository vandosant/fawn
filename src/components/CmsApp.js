import React, {PropTypes} from 'react';
import { findDOMNode } from 'react-dom';

let nextEntityId = 0;
class CmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.addEntity = this.props.actions.addEntity.bind(this);
    this.save = this.save.bind(this);
    this.mapEntity = this.mapEntity.bind(this);
    this.validate = this.validate.bind(this);
    this.settings = {};
  }

  save() {
    this.props.actions.addEntity(this.props.cmsAppState, this.settings.text, nextEntityId++);
    this.settings = {};
    findDOMNode(this.refs.text).value = "";
  }

  toggle() {
    this.props.actions.toggleEntity(this.props.cmsAppState);
  }

  mapEntity(entity) {
    return (<li key={entity.id}>{entity.text}</li>);
  }

  validate(e) {
    this.settings.text = e.target.value;
    return true;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.cmsAppState.map(this.mapEntity)}
        </ul>
        <div><input ref="text" type="text" value={this.settings.text} onChange={this.validate}/><input type="submit"
                                                                                                       value="Save"
                                                                                                       onClick={this.save}/>
        </div>
      </div>
    );
  }
}

CmsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired
};

export default CmsApp;
