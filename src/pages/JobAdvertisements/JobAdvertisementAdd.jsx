import React, { useEffect, useState } from "react";
import {
  Segment,
  Container,
  Input,
  Dropdown,
  TextArea,
} from "semantic-ui-react";
import { Button, Form, Card, Label, Grid, Icon } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobTitleService from "../../services/jobTitleService";
import WorkTimeTypeService from "../../services/workTimeTypeService";
import WorkTypeService from "../../services/workTypeService";

export default function JobaAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [titles, setTitles] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let titleService = new JobTitleService();
    titleService.getJobTitles().then((result) => setTitles(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let workTimeTypeService = new WorkTimeTypeService();
    workTimeTypeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const getJobTitles = titles.map((title, index) => ({
    key: index,
    text: title.title,
    value: title.id,
  }));

  const getWorkTypes = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workTypeName,
    value: workType.id,
  }));

  const getWorkTimes = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workTimeName,
    value: workTime.id,
  }));

  return (
    <div>
      <Segment style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card fluid color="orange">
            <Card.Header
              textAlign="center"
              style={{ fontSize: "2em", marginBottom: "1em", marginTop: "1em" }}
            >
              İş İlanı Ekle
            </Card.Header>

            <Card.Content>
              <Form>
                <Form.Field style={{ marginBottom: "1rem" }}>
                  <Label basic color="green">
                    <Icon name="list alternate" /> Şehir:
                  </Label>
                  <Dropdown
                    style={{
                      marginRight: "1em",
                      marginTop: "1em",
                      fontWeight: "lighter",
                    }}
                    button
                    placeholder="Şehir Seçiniz..."
                    fluid
                    search
                    selection
                    id="id"
                    options={getCities}
                  />
                </Form.Field>
                <Form.Field>
                  <Label basic color="orange">
                    <Icon name="list alternate" /> İş Pozisyonu:
                  </Label>
                  <Dropdown
                    style={{
                      marginRight: "1em",
                      marginTop: "1em",
                      fontWeight: "lighter",
                    }}
                    button
                    placeholder="İş Pozisyonu Seçiniz..."
                    fluid
                    search
                    selection
                    id="id"
                    options={getJobTitles}
                  />
                </Form.Field>
                <Form.Field>
                  <Label basic color="blue">
                    <Icon name="list alternate" /> Çalışma Tipi:
                  </Label>
                  <Dropdown
                    style={{
                      marginRight: "1em",
                      marginTop: "1em",
                      fontWeight: "lighter",
                    }}
                    button
                    placeholder="Çalışma Tipi Seçiniz..."
                    fluid
                    search
                    selection
                    id="id"
                    options={getWorkTypes}
                  />
                </Form.Field>
                <Form.Field>
                  <Label basic color="red">
                    <Icon name="list alternate" /> Çalışma Zamanı Tipi:
                  </Label>
                  <Dropdown
                    style={{
                      marginRight: "1em",
                      marginTop: "1em",
                      fontWeight: "lighter",
                    }}
                    button
                    placeholder="Çalışma Zamanı Tipi Seçiniz..."
                    fluid
                    search
                    selection
                    id="id"
                    options={getWorkTimes}
                  />
                </Form.Field>
                <Form.Field>
                  <Grid stackable>
                    <Grid.Column width={8}>
                    <Label basic color="teal">
                    <Icon name="lira" /> Minimum Maaş:
                  </Label>
                      <Input
                        id="minSalary"
                        placeholder="Minimum Maaş..."
                        fluid
                        style={{ marginRight: "1em", marginTop: "1em" }}
                      ></Input>
                      
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Label  basic color="orange">
                        <Icon name="lira" /> Maximum Maaş:
                      </Label>
                      <Input
                        id="maxSalary"
                        placeholder="Maximum Maaş..."
                        fluid
                        style={{ marginRight: "1em", marginTop: "1em" }}
                      ></Input>
                    </Grid.Column>
                  </Grid>
                </Form.Field>

                <Form.Field>
                  <Grid stackable>
                    <Grid.Column width={8}>
                    <Label  basic color="orange">
                        <Icon name="user" /> Personel Sayısı:
                      </Label>
                      <Input
                        id="quata"
                        placeholder="Personel Sayısı..."
                        fluid
                        style={{ marginRight: "1em", marginTop: "1em" }}
                      ></Input>
                      
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Label  basic color="red">
                        <Icon name="calendar alternate outline" /> Son Başvuru Tarihi:
                      </Label>
                      <Input
                        id="applicationdeadline"
                        placeholder=" Son Başvuru Tarihi..."
                        fluid
                        style={{ marginRight: "1em", marginTop: "1em" }}
                      ></Input>
                    </Grid.Column>
                  </Grid>
                </Form.Field>

                <Form.Field>
                <Label  basic color="red">
                        <Icon name="briefcase" /> İş Tanımı:
                      </Label>
                      <TextArea
                        id="applicationdeadline"
                        placeholder=" İş Tanımı..."
                        fluid="true"
                        style={{ marginRight: "1em", marginTop: "1em" }}
                      ></TextArea>
                </Form.Field>
                <Button animated basic color="violet" size="huge"   style={{ marginBottom: "0.4em" }}>
                    <Button.Content visible>Ekle</Button.Content>
                    <Button.Content hidden>
                      <Icon name="save outline" />
                    </Button.Content>
                  </Button>
                  <Button
                content="Ekle"
                iconposition="left"
                icon="check"
                basic color="violet" size="huge"
                type="submit"
               
              />
               <Button content='Ekle' icon="save outline" basic color="violet" iconposition='left' size="huge" />
              </Form>
            </Card.Content>
          </Card>
        </Container>
      </Segment>
    </div>
  );
}
