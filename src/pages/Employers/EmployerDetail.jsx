import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as moment from "moment";
import {
  Container,
  Segment,
  Card,
  Icon,
  Label,
  Table,
  Button,
  Divider,
} from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
export default function EmployerDetail() {
  let { id } = useParams();
  const [employer, setEmployer] = useState({});
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(id).then((result) => setEmployer(result.data.data));

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByEmployerId(id)
      .then((result) => setjobAdvertisements(result.data.data));
  }, [id]);
  return (
    <div>
      <Segment circle="true" style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card fluid color="orange">
            <Card.Content>
              <Card.Header
                textAlign="center"
                style={{
                  fontSize: "2em",
                  color: "brown",
                  marginTop: "1em",
                }}
              >
                {employer.companyName}
              </Card.Header>

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
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="globe" /> Web Adresi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                        textAlign="center"
                      >
                        {" "}
                        {employer.webAddress}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="mail" /> Mail Adresi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.email}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="phone" /> Telefon Numarası:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.phoneNumber}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="calendar outline" /> Kuruluş Tarihi:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                       {moment(employer.createdDate).format(
                                "DD.MM.yyyy"
                              )}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign="center">
                      <Table.Cell>
                        {" "}
                        <Label
                          basic
                          color="orange"
                          pointing="right"
                          style={{
                            fontSize: "1.2em",
                          }}
                        >
                          <Icon name="key" /> Şifre:
                        </Label>
                      </Table.Cell>
                      <Table.Cell
                        style={{
                          fontSize: "1.4em",
                        }}
                      >
                        {employer.password}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Meta>
            </Card.Content>
            <Card.Description>
              <Button
                type="submit"
                animated
                basic
                color="orange"
                size="massive"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Güncelle</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button>
            </Card.Description>
          </Card>

          <Divider />
          <Card fluid color="orange">
            <Card.Header
              textAlign="center"
              style={{
                fontSize: "2em",
                color: "brown",
                marginTop: "1em",
              }}
            >
              Verilen İlanlar
            </Card.Header>
            <Table basic>
              <Table.Header>
                <Table.Row
                  textAlign="center"
                  style={{
                    fontSize: "1.3em",
                    color: "brown",
                  }}
                >
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Şehir</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                  <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
                  <Table.HeaderCell>İlan Durumu</Table.HeaderCell>
                  <Table.HeaderCell>İlan Onay Durumu</Table.HeaderCell>
                  <Table.HeaderCell>Detay</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body textAlign="center">
                {jobAdvertisements.map((jobAdvertisement) => (
                  <Table.Row
                    textAlign="center"
                    style={{
                      fontSize: "1.2em",
                    }}
                  >
                    <Table.Cell>{jobAdvertisement.jobTitle?.title}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.city?.cityName}</Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workTimeType?.workTimeName}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workType?.workTypeName}
                    </Table.Cell>
                    <Table.Cell>{jobAdvertisement.quata}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      {jobAdvertisement.active === false
                        ? "Yayından kaldırıldı."
                        : "Yayında."}
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {jobAdvertisement.confirmStatus === false
                        ? "Onaylanmadı."
                        : "Onaylandı."}
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        animated
                        as={NavLink}
                        to={`/jobadvertisements/${jobAdvertisement.id}`}
                        basic
                        color="orange"
                        size="large"
                        style={{ marginBottom: "0em" }}
                      >
                        <Button.Content visible>Detaya Git</Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow right" />
                        </Button.Content>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </Container>
      </Segment>
    </div>
  );
}
