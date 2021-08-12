import React, { Component } from 'react';
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
    super(props);

    this.state = {
      lat: 24.860966,
      lng: 66.990501,
      showingInfoWindow: false,
      marker: null,
      points: []
    };
  }

  componentDidUpdate(prevProps) {

    if (this.props.predictionData?.south_prediction !== prevProps.predictionData?.south_prediction) {

      const points = [
        {
          name: 'south',
          lat: 24.8605,
          lng: 67.0261,
          pre: ((this.props.predictionData?.south_prediction) || '').replace(/[\[\]']+/g, '')
        },
        {
          // east
          name: 'east',
          lat: 24.8844, lng: 67.1443,
          pre: ((this.props.predictionData?.east_prediction) || '').replace(/[\[\]']+/g, '')
        },
        {
          // west
          name: 'west',
          lat: 24.8829
          , lng: 66.9748,
          pre: ((this.props.predictionData?.west_prediction) || '').replace(/[\[\]']+/g, '')
        },
        {
          // central
          name: 'central',
          lat: 24.9313
          , lng: 67.0374
          , pre: ((this.props.predictionData?.central_prediction) || '').replace(/[\[\]']+/g, '')
        },
        {
          // malir
          name: 'malir',
          lat: 25.0960
          , lng: 67.1871,
          pre: ((this.props.predictionData?.malir_prediction) || '').replace(/[\[\]']+/g, '')
        }
      ]
      this.setState(
        {
          points
        }
      );
    }
  }


  render() {

    const zoomno = 15
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      if (this.props.searchedCity === points[i].name) {
        bounds.extend(points[i]);
        this.state = points[i]
      }
    }
    return (

      <div style={{ position: "relative", height: "60vh" }}>
        <Map
          google={this.props.google}
          zoom={zoomno}
          style={mapStyles}
          initialCenter=
          {
            {
              lat: this.state.lat,
              lng: this.state.lng
            }
          }

        >
          {

            this.state.points.map((point, index) =>
              <Circle
                key={index}
                name={point.name}
                radius={(Math.trunc(point.pre.replace('.', '').slice(0, 4)))}
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
            )
          }
          {this.state.points.map((point, index) =>

            <Marker
              key={index}
              title={point.name}
              name={point.name}
              position={{ lat: point.lat, lng: point.lng }} >
            </Marker>
          )
          }
        </Map>
      </div>
    );
  }
}

const loadingSpin = (props) => (

  <div style={{ textAlign: "center" }}> <Spin size="large"></Spin></div>
)
export default GoogleApiWrapper({
  apiKey: '',
  LoadingContainer: loadingSpin
})(MapContainer);