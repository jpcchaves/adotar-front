import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Row } from "reactstrap";

// Formik Validation
import { useFormik } from "formik";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

//import images
import InputComponent from "components/common/inputComponent";
import { RegisterRequestDTO } from "domain/DTO/auth/RegisterRequestDTO";
import AuthPageHeading from "modules/auth/components/authPageHeading";
import AuthWrapper from "modules/auth/components/authWrapper/AuthWrapper";
import useRegister from "modules/auth/hooks/useRegister";
import { setPageTitle } from "utils/pageTitle";

const Register = () => {
  setPageTitle("Cadastro");

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("O campo é obrigatório!"),
      lastName: Yup.string().required("O campo é obrigatório!"),
      email: Yup.string().email("Insira um email válido!").required("O campo é obrigatório!"),
      password: Yup.string().required("O campo é obrigatório!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "As senhas não são iguais!")
        .required("A confirmação da senha é obrigatória!"),
    }),
    onSubmit: (values) => {
      const valuesToSutmit: RegisterRequestDTO = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      register(valuesToSutmit);
    },
  });

  const { register, isLoading } = useRegister({ validation });

  document.title = "Cadastro | Adotar";

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
                      >
                        <Row>
                          <Col md={6} className="mb-3">
                            <InputComponent
                              inputIdentifier="firstName"
                              inputLabel="Nome"
                              isRequired
                              className="form-control"
                              placeholder="Nome"
                              errorMessage={validation.errors.firstName}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              inputValue={validation.values.firstName}
                              invalid={!!(validation.touched.firstName && validation.errors.firstName)}
                            />
                          </Col>
                          <Col md={6} className="mb-3">
                            <InputComponent
                              inputIdentifier="lastName"
                              inputLabel="Sobrenome"
                              className="form-control"
                              placeholder="Sobrenome"
                              isRequired
                              errorMessage={validation.errors.lastName}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              inputValue={validation.values.lastName}
                              invalid={!!(validation.touched.lastName && validation.errors.lastName)}
                            />
                          </Col>
                        </Row>

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

                        <div className="mb-2">
                          <InputComponent
                            inputIdentifier="confirmPassword"
                            inputLabel="Confirme sua senha"
                            isRequired
                            errorMessage={validation.errors.confirmPassword}
                            type="password"
                            className="form-control"
                            placeholder="Repita sua senha"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            inputValue={validation.values.confirmPassword}
                            invalid={!!(validation.touched.confirmPassword && validation.errors.confirmPassword)}
                          />
                        </div>

                        <div className="mt-4">
                          <Button color="success" className="w-100" type="submit" disabled={isLoading}>
                            {isLoading ? "Carregando..." : "Cadastrar"}
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
