import React from "react";
import AirportsInput from "./AirportsInput";
import FormContainer from "./FormContainer";
import Header from "./Header";

const Home = () => {
  return (
    <body className="h-[100vh]">
      <Header />
      <main className="h-[70%] flex items-center justify-center">
        <FormContainer />
      </main>
    </body>
  );
};

export default Home;
