import Loader from "components/Loader";
import Header from "layout/Header";
import Home from "layout/Home";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
