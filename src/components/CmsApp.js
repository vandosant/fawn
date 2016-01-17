import React, {PropTypes} from 'react';

class CmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.addEntity = this.props.actions.addEntity.bind(this);
    this.save = this.save.bind(this);
    this.mapEntity = this.mapEntity.bind(this);
  }
  save() {
    console.log(this.props.cmsAppState);
    this.props.actions.addEntity(this.props.cmsAppState);
  }
  toggle() {
    this.props.actions.toggleEntity(this.props.cmsAppState);
  }
  mapEntity(entity, index) {
    return <form key={index}><input type="text" value={entity.text} onChange={this.save} /><input type="submit" onClick={this.save} /></form>;
  }

  render() {
    return (
      <div>
        {this.props.cmsAppState.map(this.mapEntity)}
      </div>
    );
  }
}

CmsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired
};

export default CmsApp;
