import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Sectoin = styled.div`
  height: 100vh;
  color: black;
  background-color: gray;
  scroll-snap-align: center;
`;

const Hero = () => {
  return (
    <Sectoin>
      <Navbar />
    </Sectoin>
  );
};

export default Hero;
