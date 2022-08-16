import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { GoogleMap } from "@react-google-maps/api";
import React, { Ref } from "react";
import { DirectionsResult, LatLngLiteral } from "../types/maps";
import Distance from "./Distance";
import Places from "./Places";

type AirportsFormProps = {
  setFirstAirport: (position: LatLngLiteral) => void;
  setSecondAirport: (position: LatLngLiteral) => void;
  mapRef: any;
  fetchDirections: () => void;
  handleReset: () => void;
  directions: DirectionsResult | null;
};

const AirportsForm = ({
  setFirstAirport,
  setSecondAirport,
  mapRef,
  fetchDirections,
  handleReset,
  directions,
}: AirportsFormProps) => {
  return (
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
        variant="contained"
        sx={{ height: "fit-content" }}
      >
        View Distance
      </Button>
      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{ height: "fit-content", width: "fit-content" }}
      >
        Reset
      </Button>
      {directions && <Distance leg={directions.routes[0].legs[0]} />}
    </Box>
  );
};

export default AirportsForm;
