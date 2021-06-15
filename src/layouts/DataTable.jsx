import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Card,
  Icon,
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function DataTable() {
  const [jobPosts, setJobPost] = useState([]);
  useEffect(() => {
    let jobPostService = new JobAdvertisementService();
    jobPostService.getJobPost().then((result) => setJobPost(result.data.data));
  }, []);
  return (
    <div>
      <Segment circle="true" style={{ padding: "8em 0em" }} vertical>
        <Container>
          <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
            Recent Jobs
          </Header>
          <Card.Group itemsPerRow={4}>
            {jobPosts.map((jobPost) => (
              <Card
                color="violet"
                circle="true"
                style={{
                  minHeight: 350,
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  padding: "3.4em 0.50em",
                }}
                key={jobPost.id}
              >
                <Card.Content>
                  <Icon
                    color="violet"
                    style={{ paddingBottom: "1.7em" }}
                    size="huge"
                    name="briefcase"
                  />

                  <Card.Header>{jobPost.jobTitle.title}</Card.Header>
                  <Card.Meta>{jobPost.employer.companyName}</Card.Meta>
                  <Card.Description>{jobPost.city.cityName}</Card.Description>
                  <Card.Description>
                    {jobPost.minSalary} <Icon name="lira" /> -{" "}
                    {jobPost.maxSalary} <Icon name="lira" />
                  </Card.Description>
                </Card.Content>

                <Divider>
                  <Button
                    circular
                    style={{ marginTop: "0.90em" }}
                    size="big"
                    inverted
                    color="blue"
                  >
                    Başvur
                  </Button>
                </Divider>
              </Card>
            ))}
          </Card.Group>
        </Container>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="/">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
    </div>
  );
}
