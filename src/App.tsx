import { useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import AppProvider, { AppContext } from "./context/AppContext";
import { AppContextType } from "./types/context";

function App() {
  const { loading } = useContext(AppContext) as AppContextType;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded || loading) {
    return <Loader />;
  }

  return (
    <body className="h-[100vh]">
      <AppProvider>
        <Home />
      </AppProvider>
    </body>
  );
}

export default App;
