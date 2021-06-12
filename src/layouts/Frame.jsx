import React from "react";
import { Container, Header } from "semantic-ui-react";


export default function Frame() {

   
  return (
    <div>
      <Container>
        <Header
         inverted
          as="h1"
          content="Imagine-a-Company"
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop:  "3em",
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
      </Container>
    </div>
  );
}
