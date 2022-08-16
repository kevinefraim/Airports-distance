import { DistanceProps } from "types/props";
import { formatMiles } from "utils/helpers";

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance) return null;
  const {
    distance: { text },
  } = leg;
  const nauticalMiles = formatMiles(text);

  return <h5 className="font-bold text-lg">Distance: {nauticalMiles} NMI.</h5>;
};

export default Distance;
