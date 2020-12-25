import React from 'react';
import mapboxgl from 'mapbox-gl';
import MAP_TOKEN from './constants'
import './style.css';

mapboxgl.accessToken = MAP_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: 26.8540000,
      lat: 54.3167000,
      zoom: 11
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  
  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default Map;