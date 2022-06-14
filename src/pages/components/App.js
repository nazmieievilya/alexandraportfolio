import React from "react";
import Header from "src/pages/components/Header";
import Home from "src/pages/components/Home";
import Works from "src/pages/components/Works";
import Testimonials from "src/pages/components/Testimonials";
import Contact from "src/pages/components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Works />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
