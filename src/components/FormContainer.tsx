import { Box, Button, Paper } from "@mui/material";
import React, { useContext } from "react";
import { AirportsContext } from "../context/AirportsContext";
import { AirportsContextType } from "../types/context";
import AirportsInput from "./AirportsInput";

const FormContainer = () => {
  const { airports } = useContext(AirportsContext) as AirportsContextType;
  console.log(airports);

  return (
    <Paper
      sx={{
        width: "60%",
        height: "50%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
      elevation={4}
    >
      <Box
        sx={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          height: "fit-content",
        }}
      >
        <AirportsInput label="Airport 1" />
        <AirportsInput label="Airport 2" />
        <Button variant="contained" sx={{ height: "fit-content" }}>
          View Distance
        </Button>
      </Box>
    </Paper>
  );
};

export default FormContainer;
