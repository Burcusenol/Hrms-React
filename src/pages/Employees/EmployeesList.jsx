import React from "react";
import {
  Table,
  Segment,
  Container,
  Icon,
  Card
} from "semantic-ui-react";

export default function EmployeesList() {
  return (
    <div>
      <Segment style={{ padding: "17em 0em" }} vertical>
        <Container>
          <Card fluid color="orange">
            {" "}
            <Card.Header
              as="h2"
              textAlign="center"
              style={{ fontSize: "2em", marginBottom: "1em", marginTop: "1em" }}
            >
              <Icon name="edit outline" color="orange" />
              Onay Bekleyen İlanlar
            </Card.Header>
            <Card.Content>
              <Table color="orange">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Min Salary</Table.HeaderCell>
                    <Table.HeaderCell>Max Salary</Table.HeaderCell>
                    <Table.HeaderCell>Available Positions</Table.HeaderCell>
                    <Table.HeaderCell>Deadline</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell></Table.Cell>
                    <Table.Cell> </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell> </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Content>
          </Card>
        </Container>
      </Segment>
    </div>
  );
}
