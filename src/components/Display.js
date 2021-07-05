import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid dodgerblue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function Display() {
  return (
    <Container>
      <ButtonWrapper>
        <Button label={"History"} />
        <Button label={"Vision"} />
        <Button label={"Goals"} />
      </ButtonWrapper>
      <p>Display Component</p>
    </Container>
  );
}
