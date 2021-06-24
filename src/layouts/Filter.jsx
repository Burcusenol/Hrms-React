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
  Input,
} from "semantic-ui-react";

export default function Frame() {
  const [cities, setCities] = useState([]);
  const [titles,setTitles]=useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  useEffect(() => {
    let titleService=new JobTitleService();
    titleService.getJobTitles().then((result)=>setTitles(result.data.data))
    
  }, []);

  return (
    <div>
         <Segment
           inverted
            textAlign='center'
            style={{minHeight: 500,  padding: '1em 0em' }}
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
                  <Input
                    icon="search"
                    iconPosition="left"
                    placeholder="Search..."
                  />
                </Grid.Column>

                <Grid.Column>
                  <Input
                    search="true"
                    list="cities"
                    icon="location arrow"
                    iconPosition="left"
                    placeholder="Cities..."
                  />
                  <datalist id="cities">
                    {cities.map((city) => (
                      <option key={city.id}>{city.cityName}</option>
                    ))}
                  </datalist>
                </Grid.Column>

                <Grid.Column>
                  <Input
                    list="titles"
                    icon="list alternate"
                    iconPosition="left"
                    placeholder="Job Title..."
                  />
                  <datalist id="titles">
                    {titles.map((title)=>(
                     
                    <option key={title.id} >{title.title}</option>
                    ))}
                  </datalist>
                </Grid.Column>
                <Grid.Column>
                  <Button animated basic inverted color="violet" size="massive">
                    <Button.Content visible>Submit</Button.Content>
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