import React from 'react'
import Home from '../pages/Home'
import JobAdvertisementList from '../pages/JobAdvertisements/JobAdvertisementList'
import {Route} from 'react-router-dom'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/Employers/EmployerList';
import EmployeesList from '../pages/Employees/EmployeesList';
import CandidateList from '../pages/Candidates/CandidateList';
import JobaAdvertisementAdd from '../pages/JobAdvertisements/JobAdvertisementAdd';
export default function Dashboard() {
  return (
    <div>


      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route  path="/jobadvertisements" component={JobAdvertisementList} />
          <Route  path="/employers" component={EmployerList} />
          <Route  path="/employees" component={EmployeesList} />
          <Route  path="/candidates" component={CandidateList} />
          <Route  path="/addpost" component={JobaAdvertisementAdd} />
          </Grid.Column> 
        </Grid.Row>
      </Grid>
   
    </div>
  )
}
