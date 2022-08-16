import { useLoadScript } from "@react-google-maps/api";

import Header from "./components/Header";
import Home from "./components/Home";
import Loader from "./components/Loader";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });
  if (!isLoaded) return <Loader />;

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
