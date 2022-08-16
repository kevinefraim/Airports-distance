import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";
import { LatLngLiteral, MapOptions } from "../types/maps";
import { MapProps } from "../types/props";

const Map = ({ firstAirport, secondAirport, mapRef, directions }: MapProps) => {
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="h-[100%] w-[100%]"
      options={options}
      onLoad={onLoad}
    >
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: { strokeWeight: 5, strokeColor: "#1976D2" },
          }}
        />
      )}
      {!firstAirport && !secondAirport && <Marker position={center} />}
      {firstAirport && <Marker position={firstAirport} />}
      {secondAirport && <Marker position={secondAirport} />}
    </GoogleMap>
  );
};

export default Map;
