import Header from "components/Header";
import Home from "components/Home";
import Loader from "components/Loader";
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
