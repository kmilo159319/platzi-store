import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = ({ data }) => {
  const mapSyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw">
      <GoogleMap mapContainerStyle={mapSyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
