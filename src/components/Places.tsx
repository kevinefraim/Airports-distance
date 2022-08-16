import { Button } from "@mui/material";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import React, { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { LatLngLiteral } from "../types/maps";

type PlacesProps = {
  setAirport: (position: LatLngLiteral) => void;
  reset: boolean;
};

const Places = ({ setAirport, reset }: PlacesProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["airport"],
      componentRestrictions: {
        country: "us",
      },
    },
  });

  const handleSelect = async (value: string) => {
    setValue(value, false);
    clearSuggestions();

    const results = await getGeocode({ address: value });
    const { lat, lng } = getLatLng(results[0]);
    setAirport({ lat, lng });
  };
  useEffect(() => {
    setValue("");
  }, [reset]);

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        className="w-[100%] p-[0.5rem] shadow-md "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search airports"
      />
      <ComboboxPopover>
        <ComboboxList className="bg-slate-100">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                className="hover:bg-slate-200"
                key={place_id}
                value={description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
