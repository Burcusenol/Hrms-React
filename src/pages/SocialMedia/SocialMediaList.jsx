import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialMediaService from "../../services/socialMediaService";
import {
  Table,
  Segment,
  Container,
  Message,
  Icon,
  Label,
  Card,
  Button,
} from "semantic-ui-react";
import SocialMediaUpdate from "./SocialMediaUpdate";

export default function SocialMediaList() {
  let { candidateId } = useParams();
  const [socialMedias, setsocialMedias] = useState([]);
  useEffect(() => {
    let socialMediaService = new SocialMediaService();
    socialMediaService
      .getSocialMedias(candidateId)
      .then((result) => setsocialMedias(result.data.data));
  }, [candidateId]);

  return (
    <div>
      <Segment circle="true" vertical>
        <Container>
          {socialMedias.map((socialMedia) => (
            <Message color="olive" key={socialMedia.id}>
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
                <Icon name="comment alternate" color="violet" /> Sosyal Medya{" "}
                <Button
                  type="submit"
                  floated="right"
                  animated
                  basic
                  color="violet"
                  size="large"
                  style={{ marginBottom: "1em" }}
                >
                  <Button.Content visible>Ekle</Button.Content>
                  <Button.Content hidden>
                    <Icon name="check" />
                  </Button.Content>
                </Button>
              </Message.Header>

              <Card fluid color="violet">
                <Card.Content>
                  <Card.Meta>
                    <Table
                      verticalAlign="middle"
                      basic="very"
                      style={{ marginTop: "2em" }}
                    >
                      <Table.Body>
                        <Table.Row textAlign="center">
                          <Table.Cell>
                            <Label
                              basic
                              color="violet"
                              pointing="right"
                              style={{
                                fontSize: "1.2em",
                              }}
                            >
                              <Icon name="github" size="large" color="black" />{" "}
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                            textAlign="center"
                          >
                            {" "}
                            {socialMedia.githubLink}
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
                                name="linkedin"
                                size="large"
                                color="black"
                              />{" "}
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                            {socialMedia.linkledinLink}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Card.Meta>
                </Card.Content>

                <Card.Description>
                  {" "}
                  <SocialMediaUpdate socialMedia={socialMedia} />
                </Card.Description>
              </Card>
            </Message>
          ))}
        </Container>
      </Segment>
    </div>
  );
}
