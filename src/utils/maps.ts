import { AirportType } from "../types/airports";
import { LocationType } from "../types/maps";

export const initMap = () => {
  const center = { lat: -25.344, lng: 131.031 };
  let map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 8,
    center,
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });

  const marker = new google.maps.Marker({
    position: center,
    map,
  });

  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calcRoute(directionsService, directionsRenderer);
  };

  let autocomplete1: google.maps.places.Autocomplete =
    new google.maps.places.Autocomplete(
      document.getElementById("input1") as HTMLInputElement,
      {
        types: ["airport"],
        componentRestrictions: { country: "us" },
      }
    );
  let autocomplete2: google.maps.places.Autocomplete =
    new google.maps.places.Autocomplete(
      document.getElementById("input2") as HTMLInputElement,
      {
        types: ["airport"],
        componentRestrictions: { country: "us" },
      }
    );

  google.maps.event.addListener(autocomplete1, "place_changed", () => {
    const place = autocomplete1.getPlace();
    console.log(place);
  });
  google.maps.event.addListener(autocomplete2, "place_changed", () => {
    const place = autocomplete2.getPlace();
    console.log(place);
  });
  const btn = document.getElementById("btn") as HTMLButtonElement;
  const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    onChangeHandler();
  });
  resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearRoute(directionsRenderer);
  });
};

const origin = document.getElementById("input1") as HTMLInputElement;
const destination = document.getElementById("input2") as HTMLInputElement;

export const calcRoute = (
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer
) => {
  const request = {
    origin: origin.value ?? "",
    destination: destination.value ?? "",
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

      directionsRenderer.setDirections(result);
    } else {
      directionsRenderer.setDirections({ routes: [], geocoded_waypoints: [] });
      map.setCenter(center);
      alert("Can't find road! Please try again!");
      clearRoute(directionsRenderer);
    }
  });
};

export function clearRoute(directionsRenderer: google.maps.DirectionsRenderer) {
  document.getElementById("output")!.style.display = "none";
  origin.value = "";
  destination.value = "";
  directionsRenderer.setDirections({ routes: [], geocoded_waypoints: [] });
}
