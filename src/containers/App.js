// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsApp from '../components/FuelSavingsApp';
import * as FuelSavingsActions from '../actions/fuelSavingsActions';
import * as cmsActions from '../actions/cmsActions';
import CmsApp from '../components/CmsApp';

class App extends React.Component {
  render() {
    const { fuelSavingsAppState, cmsAppState, actions } = this.props;

    return (
      <div>
        <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions}>
        </FuelSavingsApp>
        <CmsApp cmsAppState={cmsAppState} actions={actions}></CmsApp>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired,
  cmsAppState: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavingsAppState: state.fuelSavingsAppState,
    cmsAppState: state.cmsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...FuelSavingsActions, ...cmsActions}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
