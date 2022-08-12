import React from "react";
import AirportsInput from "./AirportsInput";
import FormContainer from "./FormContainer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="h-[70%] flex items-center justify-center">
        <FormContainer />
      </main>
    </>
  );
};

export default Home;
