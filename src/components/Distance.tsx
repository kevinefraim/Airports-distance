import React from "react";

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance) return null;
  const {
    distance: { text },
  } = leg;
  const miles = text.split(" ")[0];

  const nauticalMiles = Math.round(
    miles.includes(".")
      ? +miles.replace(".", "") * 0.868976
      : +miles.replace(",", ".") * 0.868976
  );

  return <div>Distance: {nauticalMiles} NMI</div>;
};

export default Distance;
