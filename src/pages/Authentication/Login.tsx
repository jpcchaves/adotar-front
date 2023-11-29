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

//redux
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";

// Formik validation
import { useFormik } from "formik";
import * as Yup from "yup";

// actions
import { loginUser, resetLoginFlag, socialLogin } from "../../slices/thunks";

<<<<<<< Updated upstream
import AuthWrapper from "pages/AuthenticationInner/AuthWrapper";
=======
>>>>>>> Stashed changes
import { createSelector } from "reselect";
//import images

const Login = (props: any) => {
  const dispatch: any = useDispatch();

  const selectLayoutState = (state: any) => state;
  const loginpageData = createSelector(selectLayoutState, (state) => ({
    user: state.Account.user,
    error: state.Login.error,
    errorMsg: state.Login.errorMsg,
  }));
  // Inside your component
  const { user, error, errorMsg } = useSelector(loginpageData);

  const [userLogin, setUserLogin] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (user && user) {
      const updatedUserData =
        process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.email;
      const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.confirm_password;
      setUserLogin({
        email: updatedUserData,
        password: updatedUserPassword,
      });
    }
  }, [user]);

  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "admin@themesbrand.com" || "",
      password: userLogin.password || "123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
      setLoader(true);
    },
  });

  const signIn = (type: any) => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //for facebook and google authentication
  const socialResponse = (type: any) => {
    signIn(type);
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
        setLoader(false);
      }, 3000);
    }
  }, [dispatch, errorMsg]);

  document.title = "Login | Adotar";
  return (
    <React.Fragment>
      <AuthWrapper>
        <div className="auth-page-content mt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg"}
                        alt=""
                        height="20"
                      />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">Facilitando a adoção de animais</p>
                </div>
                <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
              </div>
            </Col>
          </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Bem vindo!</h5>
                      <p className="text-muted">Informe seus dados de login para acessar</p>
                    </div>
                    {error && error ? <Alert color="danger"> {error} </Alert> : null}
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="password"
                            value={validation.values.password || ""}
                            type={passwordShow ? "text" : "password"}
                            className="form-control pe-5"
                            placeholder="Enter Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={validation.touched.password && validation.errors.password ? true : false}
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                          ) : null}
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                            onClick={() => setPasswordShow(!passwordShow)}
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                      </div>

                      <div className="form-check">
                        <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                        <Label className="form-check-label" htmlFor="auth-remember-check">
                          Remember me
                        </Label>
                      </div>

                      <div className="mt-4">
                        <Button
                          color="success"
                          disabled={loader && true}
                          className="btn btn-success w-100"
                          type="submit"
                        >
                          {loader && (
                            <Spinner size="sm" className="me-2">
                              {" "}
                              Loading...{" "}
                            </Spinner>
                          )}
                          Sign In
                        </Button>
                      </div>

                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13 mb-4 title">Sign In with</h5>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-primary btn-icon me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              socialResponse("facebook");
                            }}
                          >
                            <i className="ri-facebook-fill fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              socialResponse("google");
                            }}
                          >
                            <i className="ri-google-fill fs-16" />
                          </Link>
                          <Button color="dark" className="btn-icon">
                            <i className="ri-github-fill fs-16"></i>
                          </Button>{" "}
                          <Button color="info" className="btn-icon">
                            <i className="ri-twitter-fill fs-16"></i>
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Don't have an account ?{" "}
                  <Link to="/register" className="fw-semibold text-primary text-decoration-underline">
                    {" "}
                    Signup{" "}
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
