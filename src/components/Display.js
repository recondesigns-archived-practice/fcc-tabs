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
  border: 2px solid dodgerblue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SwitchWrapper = styled.div`
  height: 300px;
  border: 4px solid green;
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
