import { useMemo, useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useRef } from "react";
import { DirectionsResult, LatLngLiteral, MapOptions } from "../types/maps";
import { useCallback } from "react";
import { Box, Paper } from "@mui/material";
import AirportsForm from "./AirportsForm";

const MainContainer = () => {
  const [firstAirport, setFirstAirport] = useState<LatLngLiteral | null>(null);
  const [secondAirport, setSecondAirport] = useState<LatLngLiteral | null>(
    null
  );
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const fetchDirections = () => {
    if (!firstAirport || !secondAirport) return;
    const service: google.maps.DirectionsService =
      new google.maps.DirectionsService();
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
    window.location.reload();
  };

  return (
    <Paper
      sx={{
        width: "90%",
        marginTop: "15px",
        height: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
      elevation={8}
    >
      <Box className="flex flex-col gap-8 h-[80vh] w-full justify-center">
        <AirportsForm
          setFirstAirport={setFirstAirport}
          setSecondAirport={setSecondAirport}
          mapRef={mapRef}
          fetchDirections={fetchDirections}
          handleReset={handleReset}
          directions={directions}
        />
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
      </Box>
    </Paper>
  );
};

export default MainContainer;
