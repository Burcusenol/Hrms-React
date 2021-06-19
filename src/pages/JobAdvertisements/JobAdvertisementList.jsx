import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
  Card,
  Icon,
  Pagination
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementList() {
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
            İş İlanları
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
                  <Card.Description>
                    {" "}
                    <Icon name="map marker" /> {jobPost.city.cityName}
                  </Card.Description>
                  <Card.Description>
                    {jobPost.minSalary} <Icon name="lira" /> -{" "}
                    {jobPost.maxSalary} <Icon name="lira" />
                  </Card.Description>
                  <Card.Description>
                    {" "}
                    <Icon name="user" /> {jobPost.quata}
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
                    İlana Git
                  </Button>
                </Divider>
              </Card>
            ))}
          </Card.Group>
          <br />

          <Pagination
            style={{ marginTop: "3.5em" }}
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={10}
            circle
            size="massive"
          />
        </Container>
      </Segment>
    </div>
  );
}
