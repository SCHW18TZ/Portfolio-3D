import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Works from "./Components/Works";
import WhoAmI from "./Components/WhoAmI";
import styled from "styled-components";
import Navbar from "./Components/Navbar";

const Container = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-image: url();
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Hero />
      <WhoAmI />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
