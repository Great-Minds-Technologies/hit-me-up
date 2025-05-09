//Imports
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./css/LoginForm.css";

const mockDatabase = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "securepass456" },
  { email: "user3@example.com", password: "mypassword789" },
  { email: "user4@example.com", password: "adminpass321" },
  { email: "user5@example.com", password: "guestpass654" },
];

function LoginRegisterForm({ isLogin = true }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [renderError, setRenderError] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      //Login
      const match = mockDatabase.find(
        (user) => user.email == email && user.password == password
      );
      if (match) {
        setError("Login successful!");
        setRenderError(true);
        setIsError(false);
        console.log("Login successful!");
      } else {
        setError("Invalid email or password");
        setRenderError(true);
        setIsError(true);
        console.log("Login failed!");
      }
    } else {
      //Register
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setRenderError(true);
        setIsError(true);
        return;
      } else {
        //Success
        setError("Success!");
        setRenderError(true);
        setIsError(false);
        //Do logic to store user
        console.log({ email, password });
      }
    }
  };
  function RenderErrorMessage(isError) {
    if (isError) {
      return <p className="error-message error">{error}</p>;
    } else {
      return <p className="error-message success">{error}</p>;
    }
  }

  function RenderConfirm() {
    return (
      <FloatingLabel
        controlId="floatingConfirmPassword"
        label="Confirm Password"
        className="form-field-floating"
      >
        <Form.Control
          type="password"
          placeholder="  Confirm Password"
          className="form-field-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required={true}
        />
      </FloatingLabel>
    );
  }
  function RenderCombination() {
    if (isLogin) {
      return <h1 className="combination-title">INPUT COMBINATION</h1>;
    } else {
      return <h1 className="combination-title">CREATE COMBINATION</h1>;
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col md={12}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="form-field-floating"
            >
              <Form.Control
                className="form-field-control"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="form-field-floating"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-field-control"
                required={true}
              />
            </FloatingLabel>
            {isLogin ? null : RenderConfirm()}
            {RenderCombination()}
            {/* If login screen, do not show the confirm password field  */}
            {renderError ? RenderErrorMessage(isError) : null}
            <Row>
              <Col md={{span: 6, offset: 3}} xs={12}>
                <Button className="login-submit" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
export default LoginRegisterForm;
