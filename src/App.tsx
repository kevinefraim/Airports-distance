import { useLoadScript } from "@react-google-maps/api";
import { useContext } from "react";
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
      <main className="h-[100vh]">
        <Home />
      </main>
    </>
  );
}

export default App;
