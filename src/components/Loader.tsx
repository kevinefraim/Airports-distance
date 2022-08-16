import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box className="flex justify-center items-center h-[100vh]">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
