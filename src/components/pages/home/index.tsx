import Container from "@/components/layout/container";
import React from "react";
import Information from "./sections/Information";
import Intro from "./sections/Intro";
import Ordering from "./sections/Ordering";

const HomePage = () => {
  return (
    <Container>
      <Intro />
      <Information />
      <div className="my-5">
        <Ordering />
      </div>
    </Container>
  );
};

export default HomePage;
