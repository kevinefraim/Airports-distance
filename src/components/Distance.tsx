/* Component that renders the nautical miles distance between the two airports */

import { DistanceProps } from "types/props";
import { formatToNauticalMiles } from "utils/helpers";

import { Box, Typography } from "@mui/material";

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance) return null;
  const {
    distance: { text },
  } = leg;
  const nauticalMiles: number = formatToNauticalMiles(text);

  return (
    <Box className="p-2 rounded-md w-[fit-content]">
      <Typography variant="h6" className="font-sans">
        Distance: {nauticalMiles} NMI.
      </Typography>
    </Box>
  );
};

export default Distance;
