import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle, InfoWindow } from 'google-maps-react';
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

    // demo data
    
    this.state = {
      lat: 24.860966,
      lng: 66.990501,
      showingInfoWindow: false,
      marker: null,
      points:[]
    };
  }

  componentDidUpdate(prevProps){

    if (this.props.predictionData?.south_prediction!== prevProps.predictionData?.south_prediction) {
      
   const  points = [
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

  onMarkerClick = (props) => {
    this.setState({
      lat: 24.860966,
      lng: 66.990501,
      showingInfoWindow: true
    });
  };


  render() {

    const handleMarkerClick = (props, marker, e) => {
      this.state.showingInfoWindow = true
      this.state.marker = marker
    }
    // console.log(this.props)
    const zoomno = 15
    // console.log(this.state) 
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      if (this.props.searchedCity === points[i].name) {
        bounds.extend(points[i]);
        this.state = points[i]
      }
    }

    // console.log(points[0].pre)
    // let q= 
    // console.log(q) 
    // console.log( typeof this.props.predictionData.south_prediction)

    //  console.log((Math.trunc(point.pre) * 100))
    // console.log(points)
    return (

      <div style={{ position: "relative", height: "60vh" }}>
        <Map
          google={this.props.google}
          zoom={zoomno}
          style={mapStyles}
          initialCenter=
          {
            {
              // this.  state
              // lat: 24.860966,
              // lng: 66.990501
              lat: this.state.lat,
              lng: this.state.lng
// hello
            }
          }

        >
          {

            this.state.points.map((point) =>
              // <div>
              <Circle
                name={point.name}
                // Math.trunc(point.pre * 100)
                // Math.trunc(parseInt(point.pre.replace('.','')))  
                radius={(Math.trunc(point.pre.replace('.','').slice(0,4)))}
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
              //  </div>

            )
          }
          {this.state.points.map((point) =>

            <Marker
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