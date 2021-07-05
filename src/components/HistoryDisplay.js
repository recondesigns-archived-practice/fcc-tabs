import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* height: 100%; */
  /* background: lightblue; */
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  /* border: 1px dashed green; */
`;

const Message = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #414141;
  /* border: 1px dashed green; */
`;

export default function HistoryDisplay() {
  return (
    <Container>
      <Title>{"History"}</Title>
      <Message>
        {
          "Im baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
        }
      </Message>
    </Container>
  );
}
