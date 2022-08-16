import { Box, Paper } from "@mui/material";
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
