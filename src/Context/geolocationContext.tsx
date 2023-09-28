import React, {createContext, useContext} from 'react';
import Local, {
  GeolocationResponse,
  GeolocationError,
} from '@react-native-community/geolocation';

type GeoLocaTionProps = {
  getUserGeolocation(): {
    lat: number;
    long: number;
  };
};

const GeoLocaTionContext = createContext<GeoLocaTionProps>(
  {} as GeoLocaTionProps,
);

const GeoLocaTionProvider = ({children}: {children: React.ReactNode}) => {
  const configuration = {
    enablehighAccuracy: true,
    timeout: 1200000,
    maximmunAge: 10000,
  };
  let lat: number;
  let long: number;

  function getUserGeolocation() {
    getGeolocation();

    return {lat, long};
  }

  function successOnGetLocation(pos: GeolocationResponse) {
    lat = pos.coords.latitude;
    long = pos.coords.longitude;
  }

  function errorOnGetLocation(error: GeolocationError) {
    console.log('Algo deu errado: ' + error.message);
  }

  function getGeolocation() {
    Local.getCurrentPosition(
      successOnGetLocation,
      errorOnGetLocation,
      configuration,
    );
  }

  return (
    <GeoLocaTionContext.Provider value={{getUserGeolocation}}>
      {children}
    </GeoLocaTionContext.Provider>
  );
};

function useGeolocation() {
  const context = useContext(GeoLocaTionContext);
  return context;
}

export {GeoLocaTionProvider, useGeolocation, GeoLocaTionContext};
