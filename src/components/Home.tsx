import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ContextType } from "../types/context";
import FormContainer from "./FormContainer";
import Header from "./Header";
import Loader from "./Loader";

const Home = () => {
  const { loading } = useContext(AppContext) as ContextType;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="h-[70%] flex items-center justify-center">
            <FormContainer />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
