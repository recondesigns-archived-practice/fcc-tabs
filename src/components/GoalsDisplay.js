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

export default function GoalsDisplay() {
  return (
    <Container>
      <Title>{"Goals"}</Title>
      <Message>
        {
          "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
        }
      </Message>
    </Container>
  );
}
