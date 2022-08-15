import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../types/context";
import { ArrayIntoAutocomplete } from "../utils/helpers";
import AirportsInput from "./AirportsInput";

const FormContainer = () => {
  const { airports } = useContext(AppContext) as AppContextType;
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
        {/* <AirportsInput label="Airport 1" airports={inputAiports} />
        <AirportsInput label="Airport 2" airports={inputAiports} /> */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={inputAiports}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Airport 1" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={inputAiports}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Airport 2" />}
        />
        <Button variant="contained" sx={{ height: "fit-content" }}>
          View Distance
        </Button>
      </Box>
    </Paper>
  );
};

export default FormContainer;
