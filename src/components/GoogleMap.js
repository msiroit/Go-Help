import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    //onClick={props.onMapClick}
    googleMapURL={props.googleMapURL}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export default MyGoogleMap;