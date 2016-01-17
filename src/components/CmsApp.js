import React, {PropTypes} from 'react';

class CmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.addEntity = this.props.actions.addEntity.bind(this);
    this.save = this.save.bind(this);
    this.mapEntity = this.mapEntity.bind(this);
  }

  save() {
    this.props.actions.addEntity(this.props.cmsAppState);
  }

  toggle() {
    this.props.actions.toggleEntity(this.props.cmsAppState);
  }

  mapEntity(entity, index) {
    return (<div key={index}><input type="text" value={entity.text} readOnly/><input type="submit" value="Save"
                                                                                     onClick={this.save}/></div>);
  }

  render() {
    return (
      <div>
        {this.props.cmsAppState.map(this.mapEntity)}
        <div><input type="text"/><input type="submit" value="Save" onClick={this.save}/></div>
      </div>
    );
  }
}

CmsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired
};

export default CmsApp;
