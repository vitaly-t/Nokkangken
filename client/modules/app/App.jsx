import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Navigation from '../navigation/Navigation.jsx';
import {hashHistory} from 'react-router';



class App extends React.Component {

  componentWillMount() {
    this.props.actions.requestUserLocationSent();
    this.getUserLocation()
    .then((geolocation) => {
      this.props.actions.requestUserLocationRecieved(geolocation);
    });
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location, err) => {
        if(err) {
          reject(err);
        }else {
          resolve({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });
        }
      });
    });
  }


  render() {
    return (
      <div>
        <Navigation userLocation={this.props.userLocation}/>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
