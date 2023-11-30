import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Logo from "../../../../assets/images/logo.png";

const AuthPageHeading = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center mt-sm-5 mb-4 text-white-50">
          <div>
            <Link to="#" className="d-inline-block auth-logo">
              <img src={Logo} alt="" height="70" />
            </Link>
          </div>
          <p className="mt-3 fs-15 fw-medium">Simplificando o caminho para adotar a alegria de um novo companheiro!</p>
        </div>
      </Col>
    </Row>
  );
};

export default AuthPageHeading;
