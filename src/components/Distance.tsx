import { DistanceProps } from "types/props";
import { formatMiles } from "utils/helpers";

import { Box, Typography } from "@mui/material";

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance) return null;
  const {
    distance: { text },
  } = leg;
  const nauticalMiles: number = formatMiles(text);

  return (
    <Box className="p-2 bg-gray-200 rounded-md w-[fit-content]">
      <Typography variant="h5" className=" text-2xl font-mono">
        Distance: {nauticalMiles} NMI.
      </Typography>
    </Box>
  );
};

export default Distance;
