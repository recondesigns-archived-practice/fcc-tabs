import React from "react";
import styled from "styled-components";

const DisplayButton = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: #414141;
  background: #dae2ec;
  border: none;
  /* background: lightblue; */
`;

export default function Button(props) {
  const { label, onclick } = props;
  return <DisplayButton onClick={onclick}>{label}</DisplayButton>;
}
