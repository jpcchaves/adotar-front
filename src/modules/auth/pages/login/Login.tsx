import React, { useEffect, useState } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";

//redux

import { Link } from "react-router-dom";
import withRouter from "../../../../components/common/withRouter";

// Formik validation
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";

// actions

import AuthWrapper from "modules/auth/components/authWrapper/AuthWrapper";
//import images
import InputComponent from "components/common/inputComponent";
import { LoginRequestDTO } from "domain/DTO/auth/LoginRequestDTO";
import { useAppSelector } from "hooks/redux/useRedux";
import AuthPageHeading from "modules/auth/components/authPageHeading";
import useLogin from "modules/auth/hooks/useLogin";

const Login = () => {
  const [rememberedEmail, setRememberedEmail] = useState("");
  const { user, hasError, errorMessage } = useAppSelector((state) => state.Auth);
  const { login } = useLogin();

  const validation: FormikValues = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: rememberedEmail || "",
      password: "",
      remember: !!rememberedEmail || false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Insira um email válido!").required("O campo é obrigatório!"),
      password: Yup.string().required("O campo é obrigatório!"),
    }),
    onSubmit: (values) => {
      const valuesToSubmit: LoginRequestDTO = {
        ...values,
      };

      login(valuesToSubmit);
    },
  });

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("userEmail");
    if (rememberedEmail) {
      setRememberedEmail(JSON.parse(rememberedEmail));
    }
  }, []);

  document.title = "Login | Adotar";

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
                      <h5 className="text-primary">Bem vindo!</h5>
                      <p className="text-muted">Faça o login para continuar</p>
                    </div>
                    {hasError && errorMessage && <Alert color="danger"> {errorMessage} </Alert>}
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <div className="mb-3">
                          <InputComponent
                            inputIdentifier="email"
                            inputLabel="Email"
                            className="form-control"
                            placeholder="Email"
                            isRequired
                            errorMessage={validation.errors.email}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            inputValue={validation.values.email}
                            invalid={!!(validation.touched.email && validation.errors.email)}
                          />
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link to="/forgot-password" className="text-muted">
                              Esqueceu a senha?
                            </Link>
                          </div>

                          <InputComponent
                            inputIdentifier="password"
                            inputLabel="Senha"
                            isRequired
                            errorMessage={validation.errors.password}
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            inputValue={validation.values.password}
                            invalid={!!(validation.touched.password && validation.errors.password)}
                          />
                        </div>

                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                            checked={validation.values.remember}
                            onChange={validation.handleChange}
                          />
                          <Label className="form-check-label user-select-none" htmlFor="remember">
                            Lembrar de mim
                          </Label>
                        </div>

                        <div className="mt-4">
                          <Button color="success" className="btn btn-success w-100" type="submit">
                            Entrar
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>

                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Ainda não possui cadastro?{" "}
                    <Link to="/cadastro" className="fw-semibold text-primary text-decoration-underline">
                      {" "}
                      Cadastre-se{" "}
                    </Link>{" "}
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

export default withRouter(Login);
