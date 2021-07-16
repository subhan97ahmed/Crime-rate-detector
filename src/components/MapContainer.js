import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import { Spin } from 'antd';

const mapStyles = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

var points = ''
export class MapContainer extends Component {


  constructor(props) {
    // demo data
    points = [
      {
        name: 'south',
        lat: 24.8605
        , lng: 67.0261
      },
      {
        // east
        name: 'east',
        lat: 24.8844
        , lng: 67.1443
      },
      {
        // west
        name: 'west',
        lat: 24.8829
        , lng: 66.9748
      },
      {
        // centeral
        name: 'centeral',
        lat: 24.9313
        , lng: 67.0374
      },
      {
        // malir
        name: 'malir',
        lat: 25.0960
        , lng: 67.1871
      }
    ]

    super(props);
    console.log(this.props.searchedCity);
    this.state = {
      lat: 24.860966,
      lng: 66.990501
    };
    // if(this.props.searchedCity==='1'){

    // setloc(points[0]) 
    // this.intialcent.lng = points[0].lng

    // }
  }

  // componentDidMount(){
  //   const map = this.map;
  //   const current = this.state;
  //   const google = this.props.google;
  //   const maps = google.maps;

  //   if (map) {
  //     let center = new maps.LatLng(current.lat, current.lng);
  //     map.panTo(center);
  //   }
  // }

  render() {
    // console.log(this.state) 
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[0]);
    }
    return (
      // console.log(this.state)
      <div>
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter=
          {

            this.state
          }
          bounds={bounds}

        >
          {points.map((point) =>
            // <div>
            // {/* <Marker
            //   title={point.name}
            //   name={point.name}
            //   position={{ lat: point.lat, lng: point.lng }} >
            // </Marker> */}
            <Circle
              radius={1000}
              center={{ lat: point.lat, lng: point.lng }}
              onMouseover={() => console.log('mouseover')}
              onClick={() => console.log('click')}
              onMouseout={() => console.log('mouseout')}
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='#FF0000'
              fillOpacity={0.2}
            />
            // </div>
          )}
        </Map>
      </div>
    );
  }
}

const loadingSpin = (props) => (

  <div> <Spin style={{ textAlign: "center" }} size="large"></Spin></div>
)
export default GoogleApiWrapper({
  apiKey: '',
  LoadingContainer: loadingSpin
})(MapContainer);