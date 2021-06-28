import React, { useState, useEffect } from "react";
import EducationList from "../Education/EducationList";
import LanguageList from "../ResumeLanguage/LanguageList";
import JobExperienceList from "../JobExperience/JobExperienceList";
import SocialMediaList from "../SocialMedia/SocialMediaList";
import TechnologyList from "../Technologies/TechnologyList";
import CoverLetter from "../CoverLetter/CoverLetter";
import { useParams } from "react-router-dom";
import * as moment from 'moment';
import CandidateService from "../../services/candidateService";
import {
  Icon,
  Card,
  Segment,
  Container,
  Grid,
  Message,
  Table,
  Label
} from "semantic-ui-react";
import ImageList from "../ResumeImages/ImageList";
import ResumeUpdate from "./ResumeUpdate";


export default function Resume() {
  let { candidateId } = useParams();
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getById(candidateId)
      .then((result) => setCandidate(result.data.data));
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
              <Icon name="user outline" color="violet" /> İletişim Bilgileri{" "}
            <ResumeUpdate candidate={candidate} />
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
                <Grid.Column width={6} >
                  <ImageList />
                  {""}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Card.Content style={{ marginTop: ".50em" }}>
                    <Card.Header
                      style={{ fontSize: "2em",color: "purple" }}
                    >
                      {" "}
                      {candidate.firstName} {candidate.lastName}
                    </Card.Header>

                    <Table
                      verticalAlign="middle"
                      textAlign="left"
                      basic="very"
                      collapsing
                      style={{ marginTop: "2em" }}
                    >
                      <Table.Body>
                     
                   

                        <Table.Row >
                          <Table.Cell>
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                                 <Icon fitted  color="violet" name="mail" />{" "} 
                              Email:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.3em",
                            }}
                            textAlign="center"
                          >
                            {" "}
                            {candidate.email}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row textAlign="center">
                          <Table.Cell>
                            {" "}
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}

                            >
                                  <Icon
                        fitted
                        color="violet"
                        name="calendar alternate"
                      />{" "}
                              Doğum Yılı:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.3em",
                            }}
                          >
                            
                            {moment(candidate.birthDate).format(
                                "DD.MM.yyyy"
                              )}
                          </Table.Cell>
                        </Table.Row>


                      </Table.Body>
                    </Table>
                  </Card.Content>
                </Grid.Column>
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
