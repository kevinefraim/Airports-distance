/* Component that renders the form and handles its submit and reset*/
/* Reset button will show after one submit*/

import { useState } from "react";
import { LatLngLiteral } from "types/maps";
import { AirportsFormProps } from "types/props";

import { Button } from "@mui/material";

import AirportInput from "./AirportInput";
import Distance from "./Distance";

const AirportsForm = ({
  setFirstAirport,
  setSecondAirport,
  mapRef,
  fetchDirections,
  handleReset,
  directions,
  isResetEnabled,
}: AirportsFormProps) => {
  return (
    <form
      onSubmit={fetchDirections}
      className="flex flex-col md:flex-row md:items-center gap-8  w-full justify-center"
    >
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setFirstAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setSecondAirport(position);
          mapRef.current?.panTo(position);
        }}
      />

      <Button
        variant="contained"
        type="submit"
        color="success"
        className="h-fit"
      >
        View Distance
      </Button>

      {isResetEnabled && (
        <Button
          variant="contained"
          onClick={handleReset}
          className="h-fit w-fit"
        >
          Reset
        </Button>
      )}

      {directions && <Distance leg={directions.routes[0].legs[0]} />}
    </form>
  );
};

export default AirportsForm;
