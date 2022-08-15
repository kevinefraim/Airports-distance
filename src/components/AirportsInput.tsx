import { Autocomplete, TextField } from "@mui/material";

interface AirportsInputProps {
  label: string;
  airports: any[];
}

const AirportsInput = ({ label = "", airports = [] }: AirportsInputProps) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airports}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AirportsInput;
