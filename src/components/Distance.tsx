import { DistanceProps } from "types/props";
import { formatMiles } from "utils/helpers";

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance) return null;
  const {
    distance: { text },
  } = leg;
  const nauticalMiles = formatMiles(text);

  return (
    <div className="p-2 bg-gray-200 rounded-md w-[fit-content]">
      <h5 className="font-bold text-2xl">Distance: {nauticalMiles} NMI.</h5>
    </div>
  );
};

export default Distance;
