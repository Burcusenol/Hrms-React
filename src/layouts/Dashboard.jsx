import React from 'react'
import Home from '../pages/Home'
import JobAdvertisementList from '../pages/JobAdvertisements/JobAdvertisementList'
import {Route} from 'react-router-dom'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/Employers/EmployerList';
import CandidateList from '../pages/Candidates/CandidateList';
import JobaAdvertisementAdd from '../pages/JobAdvertisements/JobAdvertisementAdd';
import JobAdvertisementDetail from '../pages/JobAdvertisements/JobAdvertisementDetail';
import JobConfirmList from '../pages/Employees/JobConfirmList';
import EmployeesList from '../pages/Employees/EmployeesList';
export default function Dashboard() {
  return (
    <div>


      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path='/jobadvertisements/:title/:city/:workTimeType' component={JobAdvertisementList}/>
          <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
          <Route exact path="/employers" component={EmployerList} />
          <Route exact path="/jobconfirm" component={JobConfirmList} />
          <Route exact path="/employees" component={EmployeesList} />
          <Route exact path="/candidates" component={CandidateList} />
          <Route exact path="/jobadd" component={JobaAdvertisementAdd} />
          <Route exact path="/jobadvertisements/:id" component={JobAdvertisementDetail}/>
          </Grid.Column> 
        </Grid.Row>
      </Grid>
   
    </div>
  )
}
