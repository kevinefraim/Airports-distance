import { useContext } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import AppProvider, { AppContext } from "./context/AppContext";
import { AppContextType } from "./types/context";

function App() {
  const { loading } = useContext(AppContext) as AppContextType;

  return (
    <body className="h-[100vh]">
      <AppProvider>
        <Home />
      </AppProvider>
    </body>
  );
}

export default App;
