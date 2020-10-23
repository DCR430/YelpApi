import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';



export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.786882,
      lng: 122.399972
    },
    zoom: 2
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
