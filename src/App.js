import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightcoral;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: center;
  border: 1px dashed green;
`;

const Subtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  border: 1px dashed green;
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
    </Container>
  );
}
