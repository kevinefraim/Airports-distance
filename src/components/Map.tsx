import { useCallback, useMemo } from "react";
import { LatLngLiteral, MapOptions } from "types/maps";
import { MapProps } from "types/props";

import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ firstAirport, secondAirport, mapRef, directions }: MapProps) => {
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 40.74819, lng: -73.986726 }),
    []
  );
  const mapOptions = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      mapId: "d539158592125f62",
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), [mapRef]);
  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="h-[100%] w-[100%]"
      options={mapOptions}
      onLoad={onLoad}
    >
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: { strokeWeight: 5, strokeColor: "#fff670" },
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
