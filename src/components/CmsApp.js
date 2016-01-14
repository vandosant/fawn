import React, {PropTypes} from 'react';

class CmsApp extends React.Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }
  save() {
    this.props.actions.addEntity(this.props.cmsAppState);
  }

  render() {
    let x = 1;
    return (
      <div>
        <div>Hello from CMS {x}</div>
        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

CmsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired
};

export default CmsApp;
