import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
  Card,
  Icon,
  Pagination,

} from "semantic-ui-react";
import { NavLink} from "react-router-dom";
import Filter from '../../layouts/Filter'
import JobAdvertisementService from "../../services/jobAdvertisementService";
import FavoriteService from "../../services/favoriteService";
import swal from "sweetalert";
export default function JobAdvertisementList() {

  const [adCount, setAdCount] = useState(0);
  const [pageNo, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    let jobPostService = new JobAdvertisementService();
    jobPostService
      .getisActiveAndConfirmedPageAble(pageNo,pageSize)
      .then((result) => setJobPosts(result.data.data));
  }, [pageNo,pageSize]);


  function handlePageChange(event, { activePage }) {
    let jobPostService = new JobAdvertisementService();
    setPage(activePage);
    jobPostService.getisActiveAndConfirmedPageAble(activePage, pageSize).then(results => {
        setJobPosts(results.data.data);
        setAdCount(results.data.data.length);
    });
}

function handlePageSizeChange(selectedPageSize) {
  let jobPostService = new JobAdvertisementService();
    setPageSize(parseInt(selectedPageSize));
    jobPostService.getisActiveAndConfirmedPageAble(pageNo, pageSize).then(results => {
        setJobPosts(results.data.data);
        setAdCount(results.data.data.length);
        console.log(pageNo)
        console.log(pageSize)
    });
}


  const addtoFavorites=()=>{
    let favoriteService=new FavoriteService();
    const favorite={
      candidateId:1,
      jobAdvertisementId:32
    }
    favoriteService.add(favorite).then(swal("Başarılı!", "Favorilere eklendi!", "success"));
  }

  return (
    <div>
      <Filter/>
      <Segment circle="true"  style={{ padding: "8em 0em" }} vertical>
        <Container>
          
          <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
            Recent Job
          </Header>
          <Card.Group itemsPerRow={4}>
            {jobPosts.map((jobPost) => (
              <Card
                color="violet"
                circle="true"
                style={{
                  minHeight: 350,
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  padding: "3.4em 0.50em",
                }}
                key={jobPost.id}>

         

     
                <Card.Content >
                <Card.Meta>
                <Button
                onClick={()=>addtoFavorites()}
                    circular
                    style={{ marginLeft: "9em" }}
                    size="large"
                    color="violet"
                    icon="heart"
                    inverted
                  >
                 
                  </Button>
                </Card.Meta>
                  <Icon
                    color="violet"
                    style={{ paddingBottom: "1.7em" }}
                    size="huge"
                    name="briefcase"
                  />

                  <Card.Header>{jobPost.jobTitle.title}</Card.Header>
                  <Card.Meta>{jobPost.employer.companyName}</Card.Meta>
                  <Card.Description>
                    {" "}
                    <Icon name="map marker" /> {jobPost.city.cityName}
                  </Card.Description>
                  <Card.Description>
                    {jobPost.minSalary} <Icon name="lira" /> -{" "}
                    {jobPost.maxSalary} <Icon name="lira" />
                  </Card.Description>
                  <Card.Description>
                    {" "}
                    <Icon name="user" /> {jobPost.quata}
                  </Card.Description>
                  <Card.Description>
                    {" "}
                    <Icon name="time" /> {jobPost.workTimeType?.workTimeName}
                  </Card.Description>
                </Card.Content>

                <Divider>
                  <Button
                    as={NavLink}
                    to={`/jobadvertisements/${jobPost.id}`}
                    circular
                    style={{ marginTop: "0.90em" }}
                    size="big"
                    inverted
                    color="blue"
                  >
                    İlana Git
                  </Button>
                </Divider>
              </Card>
            ))}
          </Card.Group>
          <br />
          <Pagination
          activePage={pageNo}
          boundaryRange={1}
          siblingRange={1}
          onPageChange={handlePageChange}
            style={{ marginTop: "3.5em" }}
            defaultActivePage={1}
            pointing
            secondary
            totalPages={10}
            circle="true"
            size="massive"
            
          
          />
        </Container>
      </Segment>
    </div>
  );
}
