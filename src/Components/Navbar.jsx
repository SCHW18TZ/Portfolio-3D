import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1400px;
  color: white;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img``;

const ListItem = styled.li`
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>WhoAmI</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <Icons>
            <Button>Hire me</Button>
          </Icons>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
