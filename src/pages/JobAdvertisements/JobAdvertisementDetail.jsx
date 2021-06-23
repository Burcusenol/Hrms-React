import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  let { jobAdvertisementId } = useParams();
  const [jobPost, setJobPost] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByJobAdvertisementId(jobAdvertisementId)
      .then((result) => setJobPost(result.data.data));
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
                    <Card.Header>{jobPost.id}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Divider />
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
                <Label
                  basic
                  color="blue"
                  size="huge"
                  style={{ marginRight: "29em" }}
                >
                  <Icon name="list alternate" /> İş Tanımı:
                </Label>
              </Grid.Column>
              <Grid.Column width={5}>burası küçük alan</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
