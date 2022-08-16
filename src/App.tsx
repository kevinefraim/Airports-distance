import Header from "components/Header";
import Home from "components/Home";
import Loader from "components/Loader";
import { useEffect, useState } from "react";

import { useLoadScript } from "@react-google-maps/api";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (!isLoaded || loading) return <Loader />;

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
