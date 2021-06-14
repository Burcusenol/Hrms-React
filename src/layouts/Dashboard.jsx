import React from 'react'
import Home from '../pages/Home'
import JobAdvertisement from '../pages/JobAdvertisement'
import {Route} from 'react-router-dom'
import { Grid } from "semantic-ui-react";
export default function Dashboard() {
  return (
    <div>


      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/jobadvertisement" component={JobAdvertisement} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
    </div>
  )
}
