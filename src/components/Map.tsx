import { useMemo, useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useRef } from "react";
import { DirectionsResult, LatLngLiteral, MapOptions } from "../types/maps";
import { useCallback } from "react";
import Places from "./Places";
import { Box, Button } from "@mui/material";
import Distance from "./Distance";

const Map = () => {
  const [firstAirport, setFirstAirport] = useState<LatLngLiteral | null>(null);
  const [secondAirport, setSecondAirport] = useState<LatLngLiteral | null>(
    null
  );
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const fetchDirections = () => {
    if (!firstAirport || !secondAirport) return;
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: firstAirport,
        destination: secondAirport,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  const handleReset = () => {
    setFirstAirport(null);
    setSecondAirport(null);
    setDirections(null);
    window.location.reload();
  };

  return (
    <Box className="flex flex-col gap-8 h-[100vh] w-full justify-center">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Places
          setAirport={(position: LatLngLiteral) => {
            setFirstAirport(position);
            mapRef.current?.panTo(position);
          }}
        />
        <Places
          setAirport={(position: LatLngLiteral) => {
            setSecondAirport(position);
            mapRef.current?.panTo(position);
          }}
        />
        <Button
          onClick={fetchDirections}
          id="btn"
          variant="contained"
          sx={{ height: "fit-content" }}
        >
          View Distance
        </Button>
        {directions && <Distance leg={directions.routes[0].legs[0]} />}
      </Box>
      <Box className="h-[100%] w-[100%] flex justify-center">
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
      </Box>
      <Button
        id="resetBtn"
        variant="outlined"
        onClick={handleReset}
        sx={{ height: "fit-content", width: "fit-content", margin: "0 auto" }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Map;
