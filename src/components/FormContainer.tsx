import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AirportType } from "../types/airports";
import { AppContextType } from "../types/context";
import { ArrayIntoAutocomplete } from "../utils/helpers";
import Map from "./Map";

const FormContainer = () => {
  const { airports, setOrigin, origin, destiny, setDestiny } = useContext(
    AppContext
  ) as AppContextType;

  const inputAiports = airports ? ArrayIntoAutocomplete(airports) : [];

  const handleChange = (name: string | null, destiny: boolean = false) => {
    const airport =
      airports &&
      airports.find((airport: AirportType) => airport.name === name);
    return destiny ? setDestiny(airport) : setOrigin(airport);
  };
  console.log(origin, destiny);

  return (
    <Paper
      sx={{
        width: "60%",
        marginTop: "15px",
        height: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
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
          onChange={(event, value) => {
            handleChange(value?.label);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Airport 1" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={inputAiports}
          onChange={(event, value) => {
            handleChange(value?.label, true);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Airport 2" />}
        />
        <Button variant="contained" sx={{ height: "fit-content" }}>
          View Distance
        </Button>
      </Box>
      <Map />
    </Paper>
  );
};

export default FormContainer;
