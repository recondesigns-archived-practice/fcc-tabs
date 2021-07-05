import React from "react";
import styled from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";
import HistoryDisplay from "./HistoryDisplay";
import VisionDisplay from "./VisionDisplay";
import GoalsDisplay from "./GoalsDisplay";
import Button from "./Button";

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  /* border: 2px solid dodgerblue; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SwitchWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  /* height: 300px; */
`;

export default function Display() {
  let history = useHistory();

  function handleClick(func, path) {
    func.push(path);
  }

  return (
    <Container>
      <ButtonWrapper>
        <Button
          label={"History"}
          onclick={() => handleClick(history, "/history")}
        />
        <Button
          label={"Vision"}
          onclick={() => handleClick(history, "/vision")}
        />
        <Button
          label={"Goals"}
          onclick={() => handleClick(history, "/goals")}
        />
      </ButtonWrapper>
      <SwitchWrapper>
        <Switch>
          <Route exact path={"/history"} component={HistoryDisplay} />
          <Route path={"/vision"} component={VisionDisplay} />
          <Route path={"/goals"} component={GoalsDisplay} />
        </Switch>
      </SwitchWrapper>
    </Container>
  );
}
