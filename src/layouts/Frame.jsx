import React from "react";
import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
  Button,
  Input,
} from "semantic-ui-react";

export default function Frame() {
  return (
    <div>
      <Container>
        <Header
          inverted
          as="h1"
          content="FIND JOBS, CREATE TRACKABLE RESUMES AND ENRICH YOUR APPLICATIONS."
          style={{
            fontSize: "1.6em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1.5em",
          }}
        />
        <Header
          as="h2"
          content="The Easiest Way to Get Your New Job"
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginTop: "1.1em",
          }}
        />
        <Segment inverted color="grey">
          <Segment inverted color="grey">
            <Grid columns="equal" textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Input
                    icon="search"
                    iconPosition="left"
                    placeholder="Job Title..."
                  />
                </Grid.Column>
                <Grid.Column>
                  <Input
                    list="city"
                    icon="location arrow"
                    iconPosition="left"
                    placeholder="Location..."
                  />
                  <datalist id="city">
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Dutch">Dutch</option>
                  </datalist>
                </Grid.Column>
                <Grid.Column>
                  <Input
                    list="city"
                    icon="list alternate"
                    iconPosition="left"
                    placeholder="Categories..."
                  />
                  <datalist id="city">
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Dutch">Dutch</option>
                  </datalist>
                </Grid.Column>
                <Grid.Column>
                  <Button animated basic inverted color="violet" size="massive">
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    </div>
  );
}
