import { AirportType } from "../types/airports";

export const ArrayIntoAutocomplete = (array: AirportType[]) => {
  return array.map((element: any) => {
    return {
      label: element.name,
      value: element.code,
    };
  });
};
