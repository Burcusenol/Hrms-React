import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Container,
  Segment,
  Grid,
  Card,
  Icon,
  Divider,
  Label,
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementDetails() {

  let { id } = useParams();
  const [jobPost, setJobPost] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService .getByJobAdvertisementId(id).then((result) => setJobPost(result.data.data))
  }, []);

  return (
    <div>
      <Segment circle="true" style={{ padding: "27em 0em" }} vertical>
        <Container>
        

        
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={11}>
                <Card fluid color="green">
                  <Card.Content>
                    <Card.Header></Card.Header>
                    <Card.Meta></Card.Meta>

                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={5}>
                {" "}
                <Card fluid color="green">
                  <Card.Content>
                    <Card.Header></Card.Header>
                    <Card.Meta></Card.Meta>

                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>  
        </Container>
      </Segment>
    </div>
  );
}
