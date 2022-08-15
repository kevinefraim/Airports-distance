import { Box, Button, Paper } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ContextType } from "../types/context";
import { ArrayIntoAutocomplete } from "../utils/helpers";
import AirportsInput from "./AirportsInput";

const FormContainer = () => {
  const { airports } = useContext(AppContext) as ContextType;
  console.log(airports);

  const inputAiports = airports && ArrayIntoAutocomplete(airports);

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
        <AirportsInput label="Airport 1" airports={inputAiports} />
        <AirportsInput label="Airport 2" airports={inputAiports} />
        <Button variant="contained" sx={{ height: "fit-content" }}>
          View Distance
        </Button>
      </Box>
    </Paper>
  );
};

export default FormContainer;
