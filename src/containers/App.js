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
    const { fuelSavingsAppState, actions } = this.props;

    return (
      <div>
        <FuelSavingsApp fuelSavingsAppState={fuelSavingsAppState} actions={actions}>
        </FuelSavingsApp>
        <CmsApp></CmsApp>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavingsAppState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  let actionCreators = Object.assign({}, FuelSavingsActions, cmsActions);
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
