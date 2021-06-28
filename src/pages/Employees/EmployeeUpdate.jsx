import React,{useState,useEffect} from "react";
import { Button, Modal, Icon,Form,Label,Input,Container,Segment,Card,Grid,Dropdown} from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
export default function EmployeeUpdate({ employee }) {

    const EmployeeUpdateSchema = Yup.object().shape({
        firstName: Yup.string().required("Okul adı boş bırakılamaz!"),
        lastName:Yup.string().required("Bölüm adı boş bırakılamaz!"),
        email:Yup.string().required("Başlangıç yılı boş bırakılamaz!"),
        password:Yup.string().required("Şifre bilgisi boş bırakılamaz!"),
        createdDate:Yup.date().required("İşe başlama tarihi boş bırakılamaz!")
      });
      const history = useHistory();
      const formik = useFormik({
        initialValues: {
          id: employee.id,
          firstName: employee.firstName,
          lastName:employee.lastName,
          email:employee.email,
          password:employee.password,
          createdDate:employee.createdDate,
          employee: "",
        },
        validationSchema: EmployeeUpdateSchema,
        onSubmit: (values) => {
          let employeeService = new EmployeeService();
          employeeService.update(values).then((result) => console.log(result.data.data));
          swal("Başarılı!", "Personel bilgisi güncellendi!", "success");
          history.push("/employees");
        },
      });

      const [employees, setEmployees] = useState([])

      useEffect(() => {
          let employeeService=new EmployeeService();
          employeeService.getEmployee().then(result=>setEmployees(result.data.data))
      }, [])

      const getEmployees = employees.map((employee, index) => ({
        key: index,
        text: employee.firstName,
        value: employee,
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
            color="blue"
            size="massive"
            style={{ marginBottom: "2em" }}
          >
            <Button.Content visible>Güncelle</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Personel Bilgi Güncelleme</Modal.Header>
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
                              handleChangeSemantic(data.value, "employee")
                            }
                            onBlur={formik.onBlur}
                            id="employee"
                            value={formik.values.employee}
                            options={getEmployees}
                          />
                          {formik.errors.employee &&
                            formik.touched.employee && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.employee}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                            Soyisim:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Soyisim..."
                            value={formik.values.lastName}
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.lastName && formik.touched.lastName && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.lastName}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                             Mail:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Mail..."
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.email && formik.touched.email && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.email}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                             Şifre:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Şifre..."
                            value={formik.values.password}
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.password && formik.touched.password && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.password}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                             İşe Başlangıç Tarihi:
                          </Label>
                          <Input
                          type="date"
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Başlangıç Tarihi..."
                            value={formik.values.createdDate}
                            name="createdDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.createdDate && formik.touched.createdDate && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.createdDate}
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
