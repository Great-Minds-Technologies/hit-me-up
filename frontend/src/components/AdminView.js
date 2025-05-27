import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import placeholder from "../assets/images/call-to-action.jpg";
import "./css/AdminView.css"; // New CSS for admin-specific styles
import RatingDisplay from "../components/RatingDisplay";

const AdminView = () => {
  const [productName, setProductName] = useState("Her little Glock 18");
  const [vendor, setVendor] = useState("Baby Girl Defense Systems LTD");
  const [rating, setRating] = useState(3.5);
  const [description, setDescription] = useState(
    "The perfect self defense tool for the little lady in your life.\nSelect fire with semi-auto and fully automatic modes.\nBeautiful faceted jewels"
  );
  const [price, setPrice] = useState("149.99");

  // TODO: Link to MongoDB
  // TODO: Fetch product image
  // TODO: Add Save/Update logic

  return (
    <div className="admin-container">
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row className="admin-product-row">
          <Col md={6} lg={6} className="admin-image-col">
            <img src={placeholder} alt="Product" className="admin-image" />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="admin-form-col">
            <div className="admin-form-wrapper">
              <Form>
                <Form.Group controlId="formProductName">
                  <Form.Label className="admin-label">Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="admin-input"
                  />
                </Form.Group>

                <Form.Group controlId="formVendor">
                  <Form.Label className="admin-label">Vendor</Form.Label>
                  <Form.Control
                    type="text"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    className="admin-input"
                  />
                </Form.Group>

                <Form.Group controlId="formRating">
                  <Form.Label className="admin-label">Rating</Form.Label>
                  <RatingDisplay value={rating} />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label className="admin-label">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="admin-input"
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label className="admin-label">Price (R)</Form.Label>
                  <Form.Control
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="admin-input"
                  />
                </Form.Group>

                <Button variant="outline-warning" className="admin-submit-button">
                  Save Changes
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminView;
