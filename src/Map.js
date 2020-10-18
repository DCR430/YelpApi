import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.786882,
      lng: 122.399972
    },
    zoom: 6
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.786882}
            lng={122.399972}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
