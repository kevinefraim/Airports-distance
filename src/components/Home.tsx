import React, { useContext } from "react";
import { Box } from "@mui/material";
import FormContainer from "./FormContainer";
import Header from "./Header";

const Home = () => {
  return (
    <Box className="h-[70%] flex items-center justify-center">
      <FormContainer />
    </Box>
  );
};

export default Home;
