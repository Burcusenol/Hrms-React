import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Icon,
  Segment,
  Container,
  Table,
  Message,
  Label,
} from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import { useParams } from "react-router-dom";

export default function LanguageList() {
  let { candidateId } = useParams();

  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguages(candidateId)
      .then((result) => setLanguages(result.data.data));
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
              <Icon name="language" color="violet" /> Dil Bilgisi{" "}
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

            {languages.map((language) => (
              <Card fluid color="violet" key={language.id}>
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
                              Dil adı:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                            textAlign="center"
                          >
                            {" "}
                            {language.language?.languageName}
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
                              Dil Seviyesi:
                            </Label>
                          </Table.Cell>
                          <Table.Cell
                            style={{
                              fontSize: "1.4em",
                            }}
                          >
                            {language.level}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Card.Meta>
                </Card.Content>

                <Card.Description>
                  {" "}
                  <Button
                    type="submit"
                    animated
                    basic
                    color="violet"
                    size="large"
                    style={{ marginBottom: "2em" }}
                  >
                    <Button.Content visible>Güncelle</Button.Content>
                    <Button.Content hidden>
                      <Icon name="edit" />
                    </Button.Content>
                  </Button>
                </Card.Description>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
    </div>
  );
}
