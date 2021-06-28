import React,{useEffect,useState} from 'react'
import { Button,Modal,Icon,Container,Segment,Card,Dropdown,Input,Label,Form,Grid} from 'semantic-ui-react'
import CandidateService from '../../services/candidateService';
import TechnologyService from '../../services/technologyService';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function TechnologyUpdate({technology}) {

    const TechnologyUpdateSchema = Yup.object().shape({
        technologyName: Yup.string().required("Yetenek adı boş bırakılamaz!"),
      });
      const history = useHistory();
      const formik = useFormik({
        initialValues: {
          id: technology.id,
          technologyName: technology.technologyName,
          candidate: "",
        },
        validationSchema: TechnologyUpdateSchema,
        onSubmit: (values) => {
          let technologyService = new TechnologyService();
          technologyService.update(values).then((result) => console.log(result.data.data));
          swal("Başarılı!", "Yetenek bilgisi güncellendi!", "success");
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
    

    const [open, setOpen] = React.useState(false)
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
        <Modal.Header>Yetenek Güncelleme</Modal.Header>
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
                            <Icon name="code" /> Yetenek Adı:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Yetenek Adı..."
                            value={formik.values.technologyName}
                            name="technologyName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.technologyName &&
                            formik.touched.technologyName && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.technologyName}
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
    )
}
