import { AirportType } from "../types/airports";

export const initMap = (def: any) => {
  console.log(def);

  const center = !def
    ? { lat: -25.344, lng: 131.031 }
    : { lat: def.latitude, lng: def.longitude };
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center,
    }
  );

  const marker = new google.maps.Marker({
    position: center,
    map: map,
  });
};
