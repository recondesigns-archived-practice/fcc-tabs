import React from "react";
import styled from "styled-components";
import Display from "./components/Display";
import heroImg from "./assets/about-background.jpeg";

const Container = styled.div`
  padding: 80px 20px 0px 20px;
  background: rgb(241, 245, 248);
  border: 1px solid lightcoral;
`;

const Title = styled.h1`
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #414141;
  border: 1px dashed green;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 20px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: #414141;
  opacity: 0.8;
  border: 1px dashed green;
`;

const HeroImage = styled.img`
  margin-top: 80px;
  width: 100%;
  border-radius: 8px;
`;

export default function App() {
  return (
    <Container>
      <Title>{"About"}</Title>
      <Subtitle>
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!"
        }
      </Subtitle>
      <HeroImage src={heroImg} alt={"random text"} />
      <Display />
    </Container>
  );
}
