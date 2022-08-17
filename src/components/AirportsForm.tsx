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
  setDirectionsToRender,
  directions,
  onUnmount,
}: AirportsFormProps) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setDirectionsToRender();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:items-center gap-8  w-full justify-center"
    >
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setFirstAirport(position);
          mapRef?.panTo(position);
        }}
      />
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setSecondAirport(position);
          mapRef?.panTo(position);
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
      <Button variant="contained" className="h-fit" onClick={onUnmount}>
        Reset
      </Button>
      {directions && <Distance leg={directions.routes[0].legs[0]} />}
    </form>
  );
};

export default AirportsForm;
