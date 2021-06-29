import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";

import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
  Button,
  Dropdown,
} from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";
import WorkTimeTypeService from "../services/workTimeTypeService";

export default function Filter({ clickEvent }) {
  const [cities, setCities] = useState([]);
  const [titles, setTitles] = useState([]);
  const [workType, setworkType] = useState([]);
  const [workTimeType, setWorkTimeType] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let titleService = new JobTitleService();
    titleService.getJobTitles().then((result) => setTitles(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setworkType(result.data.data));

    let workTimeTypeService = new WorkTimeTypeService();
    workTimeTypeService
      .getWorkTimes()
      .then((result) => setWorkTimeType(result.data.data));
  }, []);

  const [cityIndex, setCityIndex] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value);
  };

  const [jobTitleIndex, setjobTitleIndex] = useState([]);
  const handleChangeJobTitle = (e, { value }) => {
    setjobTitleIndex(value);
  };

  const [workTypeIndex, setworkTypeIndex] = useState([]);
  const handleChangeWorkType = (e, { value }) => {
    setworkTypeIndex(value);
  };
  const [workTimeTypeIndex, setworkTimeTypeIndex] = useState([]);
  const handleChangeWorkTimeType = (e, { value }) => {
    setworkTimeTypeIndex(value);
  };

  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 500, padding: "1em 0em" }}
        vertical
      >
        <Container>
          <Header
            as="h2"
            content="The Easiest Way to Get Your New Job"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "1.1em",
            }}
          />
          <Segment inverted color="grey">
            <Segment inverted color="grey">
              <Grid columns="equal" textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Dropdown
                      placeholder="Şehir..."
                      selection
                      search
                      multiple
                      clearable
                      options={cities.map((city, index) => {
                        return {
                          text: city.cityName,
                          key: city.index,
                          value: city.id,
                        };
                      })}
                      onChange={handleChangeCity}
                      value={cityIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Çalışma Zamanı..."
                      selection
                      search
                      multiple
                      clearable
                      options={workTimeType.map((workTime, index) => {
                        return {
                          text: workTime.workTimeName,
                          key: workTime.index,
                          value: workTime.id,
                        };
                      })}
                      onChange={handleChangeWorkTimeType}
                      value={workTimeTypeIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Çalışma Tipi..."
                      selection
                      search
                      multiple
                      clearable
                      options={workType.map((workType, index) => {
                        return {
                          text: workType.workTypeName,
                          key: workType.index,
                          value: workType.id,
                        };
                      })}
                      onChange={handleChangeWorkType}
                      value={workTypeIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Pozisyon..."
                      selection
                      search
                      multiple
                      clearable
                      options={titles.map((title, index) => {
                        return {
                          text: title.title,
                          key: title.index,
                          value: title.id,
                        };
                      })}
                      onChange={handleChangeJobTitle}
                      value={jobTitleIndex}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      animated
                      basic
                      inverted
                      color="violet"
                      size="massive"
                      onClick={() =>
                        clickEvent({
                          cityId: cityIndex,
                          jobTitleId: jobTitleIndex,
                          workTypeId: workTypeIndex,
                          workTimeTypeId: workTimeTypeIndex,
                        })
                      }
                    >
                      <Button.Content visible>Filtrele</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Container>
      </Segment>
    </div>
  );
}
