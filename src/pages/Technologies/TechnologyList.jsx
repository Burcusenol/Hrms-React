import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechnologyService from "../../services/technologyService";
import {
  Label,
  Table,
  Button,
  Icon,
  Segment,
  Container,
  Message,
  Card,
} from "semantic-ui-react";

export default function TechnologyList() {
  let { candidateId } = useParams();
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    let technologyService = new TechnologyService();
    technologyService
      .getTechnologies(candidateId)
      .then((result) => setTechnologies(result.data.data));
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
              <Icon name="code" color="violet" /> Yetenekler{" "}
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

            {technologies.map((technology) => (
              <Card fluid color="violet" key={technology.id}>
                <Card.Content>
                  <Card.Meta>
                    <Table basic="very" style={{ marginTop: "2em" }}>
                      <Table.Row textAlign="center">
                        <Table.Cell width={8}>
                          <Label
                            basic
                            color="violet"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Teknoloji Adı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          width={8}
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {technology.technologyName}
                        </Table.Cell>
                      </Table.Row>
                    </Table>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
    </div>
  );
}
