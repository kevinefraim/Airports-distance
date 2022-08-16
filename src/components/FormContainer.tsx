import Map from "./Map";
import { Paper } from "@mui/material";

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
      <Map />
    </Paper>
  );
};

export default FormContainer;
