import { AirportType } from "../types/airports";
import { LocationType } from "../types/maps";

export const initMap = () => {
  const autocompleteOptions = {
    types: ["airport"],
    componentRestrictions: { country: "us" },
  };
  const center = { lat: -25.344, lng: 131.031 };

  let directionsDisplay: google.maps.DirectionsRenderer =
    new google.maps.DirectionsRenderer();

  let map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 8,
    center,
  });

  const marker = new google.maps.Marker({
    position: center,
    map,
  });

  directionsDisplay.setMap(map);

  let autocomplete1: google.maps.places.Autocomplete =
    new google.maps.places.Autocomplete(
      document.getElementById("input1") as HTMLInputElement,
      autocompleteOptions
    );
  let autocomplete2: google.maps.places.Autocomplete =
    new google.maps.places.Autocomplete(
      document.getElementById("input2") as HTMLInputElement,
      autocompleteOptions
    );

  google.maps.event.addListener(autocomplete1, "place_changed", () => {
    const place = autocomplete1.getPlace();
    const { geometry } = place;
    const { viewport, location } = geometry!;
  });
  google.maps.event.addListener(autocomplete2, "place_changed", () => {
    const place = autocomplete2.getPlace();
    console.log(place);
  });
};
const origin = document.getElementById("input1") as HTMLInputElement;
const destination = document.getElementById("input2") as HTMLInputElement;
let directionsDisplay: google.maps.DirectionsRenderer =
  new google.maps.DirectionsRenderer();
export const calcRoute = () => {
  let directionsService: google.maps.DirectionsService =
    new google.maps.DirectionsService();
  const request = {
    origin: origin.value,
    destination: destination.value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
  };

  const center = { lat: -25.344, lng: 131.031 };

  let map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 8,
    center,
  });

  directionsService.route(request, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      document.getElementById("output")!.innerHTML =
        "<div class='result-table'> Driving distance: " +
        result.routes[0].legs[0].distance.text +
        ".<br />Duration: " +
        result.routes[0].legs[0].duration.text +
        ".</div>";

      document.getElementById("output")!.style.display = "block";

      directionsDisplay.setDirections(result);
    } else {
      directionsDisplay.setDirections({ routes: [], geocoded_waypoints: [] });
      map.setCenter(center);

      alert("Can't find road! Please try again!");
      clearRoute();
    }
  });
};

export function clearRoute() {
  document.getElementById("output")!.style.display = "none";
  origin.value = "";
  destination.value = "";
  directionsDisplay.setDirections({ routes: [], geocoded_waypoints: [] });
}
