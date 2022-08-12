import React from "react";
import Home from "./components/Home";
import AirportsProvider from "./context/AirportsContext";

function App() {
  return (
    <body className="h-[100vh]">
      <AirportsProvider>
        <Home />
      </AirportsProvider>
    </body>
  );
}

export default App;
