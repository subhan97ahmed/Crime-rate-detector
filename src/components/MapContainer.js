import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  overflow:'hidden',
};

const isl=[
  {
  lat:33.6844,
  lng:73.0479
  },
];
export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          // initialCenter=
          // {
          //   {
          //     lat: 24.860966,
          //     lng: 66.990501
          //   }
          // }
          initialCenter={
            {
              lat:33.6844,
              lng:73.0479
            }
            
          }
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);