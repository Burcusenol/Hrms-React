import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid,Segment,Container,Label,Icon } from "semantic-ui-react";
import JobAdvertisementService from '../../services/jobAdvertisementService';
import CityService from '../../services/cityService';
import WorkTypeService from '../../services/workTypeService';
import WorkTimeTypeService from '../../services/workTimeTypeService';
import JobTitleService from '../../services/jobTitleService';
import EmployerService from "../../services/employerService";
import * as moment from 'moment'


export default function JobPosting() {
  let jobAdvertisementService = new JobAdvertisementService()

  const JobAdvertAddSchema = Yup.object().shape({
      applicationDeadline: Yup.string().nullable().required("Son başvuru tarihi boş bırakılamaz!"),
      description: Yup.string().required("İş açıklaması boş bırakılamaz!"),
      jobTitle: new Yup.ObjectSchema().required("İş pozisyonu bilgisi boş geçilemez!"),
      workTimeType: new Yup.ObjectSchema().required("Çalışma zamanı tipi boş bırakılamaz!"),
      workType: new Yup.ObjectSchema().required("Çalışma tipi boş bırakılamaz!"),
      quata: Yup.string().required("Kişi sayısı boş bırakılamaz!"),
      city: new Yup.ObjectSchema().required("Şehir bilgisi boş bırakılamaz!"),
  });

  const history = useHistory()

  const formik = useFormik({
      initialValues: {
          employer:"",
          description: "",
          jobTitle: "",
          workTimeType: "",
          workType: "",
          quata: "",
          city: "",
          minSalary: "",
          maxSalary: "",
          applicationDeadline:moment().format("YYYY-MM-DD")
       
      },
      validationSchema: JobAdvertAddSchema,
      onSubmit: (values) => {
          jobAdvertisementService.addJobAdvertisement(values).then((result) => console.log(result.data.data));
          alert("Job Advertisement is added. It is going be listed after validation.");
          history.push("/home");
      },
  });

  const[employers,setEmployers]=useState([]);
  const [workTimeTypes, setworkTimeTypes] = useState([]);
  const [workTypes, setworkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setjobTitles] = useState([]);

  useEffect(() => {
      let workTimeTypeService = new WorkTimeTypeService()
      let workTypeService = new WorkTypeService()
      let cityService = new CityService()
      let titleService = new JobTitleService()
      let employerService=new EmployerService()

      workTimeTypeService.getWorkTimes().then(result => setworkTimeTypes(result.data.data))
      workTypeService.getWorkTypes().then(result => setworkTypes(result.data.data))
      cityService.getCities().then(result => setCities(result.data.data))
      titleService.getJobTitles().then(result => setjobTitles(result.data.data))
      employerService.getEmployers().then(result=>setEmployers(result.data.data))
  }, [])

  const getWorkTimes  = workTimeTypes.map((workTimeType, index) => ({
      key: index,
      text: workTimeType.workTimeName,
      value: workTimeType,
  }));
  const getWorkTypes  = workTypes.map((workType, index) => ({
      key: index,
      text: workType.workTypeName,
      value: workType,
  }));
  const getCities  = cities.map((city, index) => ({
      key: index,
      text: city.cityName,
      value: city,
  }));
  const getJobTitles  = jobTitles.map((jobTitle, index) => ({
      key: index,
      text: jobTitle.title,
      value: jobTitle,
  }));
  const getEmployers  = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer,
}));

  const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
  }

  return (
      <div>
         <Segment style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card fluid color = 'black'>
          <Card.Header
              textAlign="center"
              style={{ fontSize: "2em", marginBottom: "1em", marginTop: "1em" }}
            >
              İş İlanı Ekle
            </Card.Header>
              <Card.Content>
                  <Form onSubmit={formik.handleSubmit}><Form.Field style={{ marginBottom: "1rem" }}>
                  <Label basic color="blue">
                    <Icon name="list alternate" /> Şirket:
                  </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                              clearable
                              item
                              placeholder="Şirket Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "employer")
                              }
                              onBlur={formik.onBlur}
                              id="employer"
                              value={formik.values.employer}
                              options={getEmployers}
                          />
                          {formik.errors.employer && formik.touched.employer && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.employer}
                              </div>
                          )}
                      </Form.Field>

                      <Form.Field style={{ marginBottom: "1rem" }}>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> Şehir:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="Şehir Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "city")
                              }
                              onBlur={formik.onBlur}
                              id="title"
                              value={formik.values.city}
                              options={getCities}
                          />
                          {formik.errors.city && formik.touched.city && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.city}
                              </div>
                          )}
                      </Form.Field>
                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> İş Pozisyonu:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="İş Pozisyonu Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "jobTitle")
                              }
                              onBlur={formik.onBlur}
                              id="city"
                              value={formik.values.jobTitle}
                              options={getJobTitles}
                          />
                          {formik.errors.jobTitle && formik.touched.jobTitle && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.jobTitle}
                              </div>
                          )}
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
                              clearable
                              item
                              placeholder="Çalışma Tipi Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "workType")
                              }
                              onBlur={formik.onBlur}
                              id="workType"
                              value={formik.values.workType}
                              options={getWorkTypes}
                          />
                          {formik.errors.workType && formik.touched.workType && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.workType}
                              </div>
                          )}
                      </Form.Field>
                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> Çalışma Zamanı Tipi:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="Çalışma Zamanı Tipi Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "workTimeType")
                              }
                              onBlur={formik.onBlur}
                              id="workTimeType"
                              value={formik.values.workTimeType}
                              options={getWorkTimes}
                          />
                          {formik.errors.workTimeType && formik.touched.workTimeType && (
                              <div className={"ui pointing red basic label"}>{formik.errors.workTimeType}</div>
                          )}
                      </Form.Field>
                      <Form.Field>
                          <Grid stackable>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="lira" /> Minimum Maaş:
                      </Label>
                                  <Input
                                       style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="number"
                                      placeholder="Minimum Salary"
                                      value={formik.values.minSalary}
                                      name="minSalary"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                  >
                                  </Input>
                                  {formik.errors.minSalary && formik.touched.minSalary && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.minSalary}
                                      </div>
                                  )}
                              </Grid.Column>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="lira" /> Maximum Maaş:
                      </Label>
                                  <Input
                                       style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="number"
                                      placeholder="Maximum Salary"
                                      value={formik.values.maxSalary}
                                      name="maxSalary"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                  >
                                  </Input>
                                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.maxSalary}
                                      </div>
                                  )}
                              </Grid.Column>
                          </Grid>
                      </Form.Field>

                      <Form.Field>
                          <Grid stackable>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="user" />Alınacak Personel Sayısı:
                      </Label>
                                  <Input
                                      style={{ marginRight: "1em", marginTop: "1em" }}
                                      id="quata"
                                      name="quata"
                                      error={Boolean(formik.errors.quata)}
                                      onChange={formik.handleChange}
                                      value={formik.values.quata}
                                      onBlur={formik.handleBlur}
                                      type="number"
                                      placeholder="Open Positions"
                                  />
                                  {formik.errors.quata && formik.touched.quata && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.quata}
                                      </div>
                                  )}
                              </Grid.Column>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="calendar alternate outline" /> Son Başvuru
                        Tarihi:
                      </Label>
                                  <Input 
                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="date"
                                      error={Boolean(formik.errors.applicationDeadline)}
                                      onChange={(event, data) =>
                                          handleChangeSemantic(data.value, "applicationDeadline")
                                      }
                                      value={formik.values.applicationDeadline}
                                      onBlur={formik.handleBlur}
                                      name="applicationDeadline"
                                      placeholder="Deadline"
                                  />
                                  {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.applicationDeadline}
                                      </div>
                                  )}
                              </Grid.Column>
                          </Grid>
                      </Form.Field>

                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="briefcase" /> İş Tanımı:
                  </Label>
                          <TextArea
                              placeholder="Description"
                              style={{ marginRight: "1em", marginTop: "1em" }}
                              error={Boolean(formik.errors.description).toString()}
                              value={formik.values.description}
                              name="description"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                          />
                          {formik.errors.description && formik.touched.description && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.description}
                              </div>
                          )}
                      </Form.Field>
                      <Button
                  type="submit"
                  animated
                  basic
                  color="blue"
                  size="massive"
                  style={{ marginBottom: "0.4em" }}
                >
                  <Button.Content visible>Ekle</Button.Content>
                  <Button.Content hidden>
                    <Icon name="check" />
                  </Button.Content>
                </Button>
                      {/* <pre>
                          {JSON.stringify(formik.values, null, 2)}
                      </pre> */}
                  </Form>
              </Card.Content>
          </Card>
          </Container>
        </Segment>
      </div>
  )
}