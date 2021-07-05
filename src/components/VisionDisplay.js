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

export default function VisionDisplay() {
  return (
    <Container>
      <Title>{"Vision"}</Title>
      <Message>
        {
          "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
        }
      </Message>
    </Container>
  );
}
