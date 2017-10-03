/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  latLngs: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired
}

const defaultProps = {}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      latLngs: this.props.latLngs,
      map: undefined
    }
    this.divRef = undefined;
  }
  componentDidMount() {
    const js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.async = true;
    js_file.src = `https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`;
    this.divRef.appendChild(js_file);
    window.initMap = () => {
      this.map = new google.maps.Map(this.divRef, {
        zoom: 12,
        center: this.props.center
      });
      // this.setMarkers(this.map, this.props.latLngs);
      this.markers = this.createMarkers(this.props.latLngs);
      this.drawMarkers(this.map, this.markers);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //Mouse over card
    if (!prevProps.hoverMarker && this.props.hoverMarker) {
      this.hideMarkers(this.markers);
      this.hoverMarker = this.createMarkers([this.props.hoverMarker]);
      this.drawMarkers(this.map, this.hoverMarker);
      // this.map.setCenter(this.props.hoverMarker);
    }
    // Mouse out card
    else if (prevProps.hoverMarker && !this.props.hoverMarker) {
      this.hideMarkers(this.hoverMarker);
      this.drawMarkers(this.map, this.markers);
    }
    else {
      this.hideMarkers(this.markers);
      this.map.setCenter(this.props.center);
      this.markers = this.createMarkers(this.props.latLngs);
      this.drawMarkers(this.map, this.markers);
    }
  }
  createMarkers = (latLngs) => {
    if (!latLngs) return;
    return latLngs.map(latLng => {
      return new window.google.maps.Marker({
        position: { lat: latLng.lat, lng: latLng.lng }
      });
    });
  }
  drawMarkers = (map, markers) => {
    if (!markers) return;
    markers.forEach(marker => marker.setMap(map));
  }
  hideMarkers = (markers) => {
    markers.forEach(marker => marker.setMap(null));
  }

  render() {
    return (
      <div className="gmap-div" ref={(divRef) => this.divRef = divRef}>
      </div>
    )
  }
}

const gmapApiKey = "AIzaSyCvo4V76TY-2If3vpxYt1wK5hRP0M6BA6A";

Map.propTypes = propTypes

Map.defaultProps = defaultProps

export default Map
