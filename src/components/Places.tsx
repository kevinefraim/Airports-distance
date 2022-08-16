import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { PlacesProps } from "../types/props";

const Places = ({ setAirport }: PlacesProps) => {
  const {
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
