import React, { useState, useEffect } from "react";
import EducationList from "../Education/EducationList";
import LanguageList from "../ResumeLanguage/LanguageList";
import JobExperienceList from "../JobExperience/JobExperienceList";
import SocialMediaList from "../SocialMedia/SocialMediaList";
import TechnologyList from "../Technologies/TechnologyList";
import CoverLetter from "../CoverLetter/CoverLetter";
import { useParams } from "react-router-dom";
import CandidateService from "../../services/candidateService";
import {
  Icon,
  Button,
  Card,
  Segment,
  Container,
  Grid,
  Message
} from "semantic-ui-react";
import ImageList from "../ResumeImages/ImageList";

export default function Resume() {
  let { candidateId } = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getById(candidateId)
      .then((result) => setCandidates(result.data.data));
  }, [candidateId]);

  return (
    <div>
      <Segment circle="true" vertical>
        <Container>
        <Message color="olive">
            <Message.Header
              textalign="left"
              style={{
                textalign: "left",
                fontSize: "2em",
                color: "purple",
                marginTop: "0.75em",
              }}
            >
              {" "}
              <Icon name="user outline" color="violet" /> İletişim Bilgileri {" "}
              <Button
                type="submit"
                floated="right"
                animated
                basic
                color="violet"
                size="large"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Güncelle</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button>
            </Message.Header>
          <Card
            fluid
            color="purple"
            circle="true"
            style={{
              minHeight: 350,
              fontSize: "1.2em",
              fontWeight: "normal",
              padding: "3.4em 1em",
            }}
          >
            <Grid>
              <Grid.Column width={3}>
                <ImageList />
                {""}
              </Grid.Column>
              <Grid.Column width={10}>
                <Card.Content style={{ marginTop: "1em" }}>
                  <Card.Header style={{ fontSize: "2em" }}></Card.Header>

                  <Card.Description
                    textAlign="center"
                    style={{ marginTop: "3em" }}
                  >
                    {" "}
                    <Icon circular fitted color="violet" name="circle" />{" "}
                  </Card.Description>

                  <Card.Description textAlign="center">
                    {" "}
                    <Icon fitted circular color="orange" name="mail" />{" "}
                  </Card.Description>
                  <Card.Description textAlign="center">
                    {" "}
                    <Icon
                      circular
                      fitted
                      color="green"
                      name="calendar alternate"
                    />{" "}
                  </Card.Description>
                </Card.Content>
              </Grid.Column>
              <Grid.Column width={3}></Grid.Column>
            </Grid>
          </Card>
          </Message>
        </Container>
      </Segment>

      <CoverLetter></CoverLetter>
      <EducationList></EducationList>
      <LanguageList></LanguageList>
      <JobExperienceList></JobExperienceList>
      <SocialMediaList></SocialMediaList>
      <TechnologyList></TechnologyList>
    </div>
  );
}
