//Imports

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/css/LogIn.css";
import LoginForm from "../components/LoginRegisterForms";

function LogIn() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row className="login-row">
        <Col md={12} className="login-col">
          <h1 className="login-title">LOGIN</h1>
          {/* Form */}
          <div style={{width: '100%'}}>
            <LoginForm isLogin={true} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LogIn;
