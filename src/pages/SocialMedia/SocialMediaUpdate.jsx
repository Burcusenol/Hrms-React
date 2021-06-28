import {
  Modal,
  Button,
  Icon,
  Label,
  Form,
  Segment,
  Container,
  Card,
  Grid,
  Dropdown,
  Input,
} from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import SocialMediaService from "../../services/socialMediaService";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import CandidateService from "../../services/candidateService";
export default function SocialMediaUpdate({ socialMedia }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: socialMedia.id,
      githubLink: socialMedia.githubLink,
      linkledinLink: socialMedia.linkledinLink,
      candidate: "",
    },
    onSubmit: (values) => {
      let socialMediaService = new SocialMediaService();
      socialMediaService
        .update(values)
        .then((result) => console.log(result.data.data));
      swal("Başarılı!", "Sosyal medya bilgisi güncellendi!", "success");
      history.push("/resume/1");
    },
  });

  const [candidates, setcandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setcandidates(result.data.data));
  }, []);

  const getCandidates = candidates.map((candidate, index) => ({
    key: index,
    text: candidate.firstName,
    value: candidate,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            type="submit"
            animated
            basic
            color="violet"
            size="large"
            style={{ marginBottom: "2em" }}
          >
            <Button.Content visible>Güncelle</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Sosyal Medya Güncelleme</Modal.Header>
        <Modal.Description>
          <Container>
            <Segment circle="true" vertical style={{ padding: "3em 0em" }}>
              <Grid>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={14}>
                  <Card fluid color="blue">
                    <Card.Content>
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                          <Label basic color="blue">
                            <Icon name="list alternate" /> İsim:
                          </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                            clearable
                            item
                            placeholder="İsim Seçiniz..."
                            search
                            selection
                            onChange={(event, data) =>
                              handleChangeSemantic(data.value, "candidate")
                            }
                            onBlur={formik.onBlur}
                            id="candidate"
                            value={formik.values.candidate}
                            options={getCandidates}
                          />
                          {formik.errors.candidate &&
                            formik.touched.candidate && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.candidate}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="linkify" /> Github Link:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Github..."
                            value={formik.values.githubLink}
                            name="githubLink"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.githubLink &&
                            formik.touched.githubLink && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.githubLink}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="linkify" /> Linkledin Link:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Linkledin..."
                            value={formik.values.linkledinLink}
                            name="linkledinLink"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.linkledinLink &&
                            formik.touched.linkledinLink && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.linkledinLink}
                              </div>
                            )}
                        </Form.Field>
                        <Modal.Actions>
                          <Button
                            onClick={() => setOpen(false)}
                            animated
                            basic
                            color="blue"
                            size="massive"
                            style={{
                              marginBottom: "0.4em",
                              marginLeft: "19.8em",
                            }}
                          >
                            <Button.Content visible>Vazgeç</Button.Content>
                            <Button.Content hidden>
                              <Icon name="delete" />
                            </Button.Content>
                          </Button>
                          <Button
                            type="submit"
                            animated
                            basic
                            color="blue"
                            size="massive"
                            style={{
                              marginBottom: "0.4em",
                              marginRigth: "10em",
                            }}
                          >
                            <Button.Content visible>Kaydet</Button.Content>
                            <Button.Content hidden>
                              <Icon name="check" />
                            </Button.Content>
                          </Button>
                        </Modal.Actions>
                      </Form>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>
            </Segment>
          </Container>
        </Modal.Description>
      </Modal>
    </div>
  );
}
