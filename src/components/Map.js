import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '270px',
};

function Map({ boardingCity, destinationCity }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyABJoNDRIiErWjPwWej9Ey1VL26gDs_rsk',
  });

  const center = { lat: 0, lng: 0 };

  const boardingCityLocation = getCityCoordinates(boardingCity);
  const destinationCityLocation = getCityCoordinates(destinationCity);

  if (boardingCityLocation && destinationCityLocation) {
    center.lat = (boardingCityLocation.lat + destinationCityLocation.lat) / 2;
    center.lng = (boardingCityLocation.lng + destinationCityLocation.lng) / 2;
  } else if (boardingCityLocation) {
    center.lat = boardingCityLocation.lat;
    center.lng = boardingCityLocation.lng;
  } else if (destinationCityLocation) {
    center.lat = destinationCityLocation.lat;
    center.lng = destinationCityLocation.lng;
  }

  function getCityCoordinates(city) {
    const cityCoordinates = {
      'New York': { lat: 40.7128, lng: -74.006 },
      'Los Angeles': { lat: 34.0522, lng: -118.2437 },
      'London': { lat: 51.5074, lng: -0.1278 },
      'Paris': { lat: 48.8566, lng: 2.3522 },
      'Tokyo': { lat: 35.6895, lng: 139.6917 },
      'Seoul': { lat: 37.5665, lng: 126.978 },
    };

    return cityCoordinates[city] || null;
  }

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
      {boardingCityLocation && (
        <Marker position={{ lat: boardingCityLocation.lat, lng: boardingCityLocation.lng }} />
      )}
      {destinationCityLocation && (
        <Marker position={{ lat: destinationCityLocation.lat, lng: destinationCityLocation.lng }} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
