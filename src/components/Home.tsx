import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../types/context";
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
