import React from "react";
import styled from "styled-components";
import Button from "./Button";

const content = [
  {
    title: "History",
    message:
      "Im baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
  },
  {
    title: "Vision",
    message:
      "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
  },
  {
    title: "Goals",
    message:
      "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
  }
];

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  /* border: 2px solid dodgerblue; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ContentWrapper = styled.div`
  border: 2px solid dodgerblue;
`;

const Title = styled.h3`
  /* margin-bottom: 8px; */
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  border: 1px dashed green;
`;

const Message = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #414141;
  /* border: 1px dashed green; */
`;

export default function Display() {
  console.log(content);
  return (
    <Container>
      <ButtonWrapper>
        <Button label={"History"} />
        <Button label={"Vision"} />
        <Button label={"Goals"} />
      </ButtonWrapper>

      <ContentWrapper>
        <Title>{"History"}</Title>
        <Message>
          {
            "Im baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
          }
        </Message>
      </ContentWrapper>
    </Container>
  );
}
