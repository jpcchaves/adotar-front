import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Logo from "../../../../assets/images/logo.png";

const AuthPageHeading = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center mt-sm-5 mb-4 text-white-50">
          <div className="mb-3">
            <Link to="#" className="d-inline-block auth-logo">
              <img src={Logo} alt="" height="70" />
            </Link>
          </div>
          <h1 className="title text-primary fw-bold">Adotar</h1>

          <p className="fs-15 fw-medium">Transforme seu mundo com uma adoção</p>
        </div>
      </Col>
    </Row>
  );
};

export default AuthPageHeading;
