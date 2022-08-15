import Home from "./components/Home";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <body className="h-[100vh]">
      <AppProvider>
        <Home />
      </AppProvider>
    </body>
  );
}

export default App;
