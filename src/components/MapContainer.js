import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  // minHeight:'50%',
  overflow:'hidden',
  // alignText:"center",
  // backgroundColor:"black",
  // position:'absolute',
  // position: 'absolute', left: '25%', top: '25%'
  // position:'center'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className='ma' >
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter=
          {
            {
              lat: 24.860966,
              lng: 66.990501
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