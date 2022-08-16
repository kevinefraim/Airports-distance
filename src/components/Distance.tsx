import React from "react";

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance || !leg.duration) return null;
  console.log(leg);

  const nauticalMiles = Math.round(
    +leg.distance.text.split(" ")[0].replace(",", ".") * 0.868976
  );

  return <div>Distance: {nauticalMiles} NMI</div>;
};

export default Distance;
