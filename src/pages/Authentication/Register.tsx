import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";

// Formik Validation
import { useFormik } from "formik";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";

// action
import { registerUser, resetRegisterFlag } from "../../slices/thunks";

//redux
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images
import AuthPageHeading from "modules/auth/components/authPageHeading";
import AuthWrapper from "pages/AuthenticationInner/AuthWrapper";
import { createSelector } from "reselect";

const Register = () => {
  const history = useNavigate();
  const dispatch: any = useDispatch();

  const [loader, setLoader] = useState<boolean>(false);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
      first_name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      first_name: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), ""])
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
      setLoader(true);
    },
  });

  const selectLayoutState = (state: any) => state.Account;
  const registerdatatype = createSelector(selectLayoutState, (account) => ({
    success: account.success,
    error: account.error,
  }));
  // Inside your component
  const { error, success } = useSelector(registerdatatype);

  useEffect(() => {
    if (success) {
      setTimeout(() => history("/login"), 3000);
    }

    setTimeout(() => {
      dispatch(resetRegisterFlag());
      setLoader(false);
    }, 3000);
  }, [dispatch, success, error, history]);

  document.title = "Basic SignUp | adotar - React Admin & Dashboard Template";

  let condition = true;

  return (
    <React.Fragment>
      <AuthWrapper>
        <div className="auth-page-content mt-lg-5">
          <Container>
            <AuthPageHeading />
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Cadastro</h5>
                      <p className="text-muted">Preencha os dados abaixo para concluir o seu cadastro</p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        className="needs-validation"
                        action="#"
                      >
                        {error && error ? (
                          <Alert color="danger">
                            <div>Email has been Register Before, Please Use Another Email Address... </div>
                          </Alert>
                        ) : null}

                        <Row>
                          <Col md={6} className="mb-3">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              className="form-control"
                              placeholder="Nome"
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={!!(validation.touched.email && validation.errors.email)}
                            />
                          </Col>
                          <Col md={6} className="mb-3">
                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              className="form-control"
                              placeholder="Sobrenome"
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={validation.touched.email && validation.errors.email ? true : false}
                            />
                          </Col>
                        </Row>

                        <div className="mb-3">
                          <Label htmlFor="useremail" className="form-label">
                            Email <span className="text-danger">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={validation.touched.email && validation.errors.email ? true : false}
                          />
                          {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">
                              <div>{validation.errors.email}</div>
                            </FormFeedback>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="username" className="form-label">
                            Username <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="first_name"
                            type="text"
                            placeholder="Enter username"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.first_name || ""}
                            invalid={validation.touched.first_name && validation.errors.first_name ? true : false}
                          />
                          {validation.touched.first_name && validation.errors.first_name ? (
                            <FormFeedback type="invalid">
                              <div>{validation.errors.first_name}</div>
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">
                            Senha <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password || ""}
                            invalid={validation.touched.password && validation.errors.password ? true : false}
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">
                              <div>{validation.errors.password}</div>
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-2">
                          <Label htmlFor="confirmPassword" className="form-label">
                            Confirme sua senha <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="confirm_password"
                            type="password"
                            placeholder="Confirme sua senha"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.confirm_password || ""}
                            invalid={
                              validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                            }
                          />
                          {validation.touched.confirm_password && validation.errors.confirm_password ? (
                            <FormFeedback type="invalid">
                              <div>{validation.errors.confirm_password}</div>
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mt-4">
                          <Button color="success" className="w-100" type="submit" disabled={loader && true}>
                            {loader && (
                              <Spinner size="sm" className="me-2">
                                Carregando...
                              </Spinner>
                            )}
                            Entrar
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Ja possui uma conta?{" "}
                    <Link to="/login" className="fw-semibold text-primary text-decoration-underline">
                      Entrar
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default Register;
