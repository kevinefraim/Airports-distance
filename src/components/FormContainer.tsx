import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import Map from "./Map";

const FormContainer = () => {
  return (
    <Paper
      sx={{
        width: "90%",
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
      ></Box>
      <Map />
    </Paper>
  );
};

export default FormContainer;
