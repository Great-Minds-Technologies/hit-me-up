import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../components/css/AddProduct.css";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [vendor, setVendor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePostProduct = () => {
    alert("Product posted!");
    // Hook up to backend/database later
  };

  return (
    <div className="addproduct-container">
      <Container className="mt-5 mb-5">
        <Row className="addproduct-row">
          <Col md={6} className="addproduct-image-col">
            <div
              className="addproduct-placeholder"
              onClick={triggerFileInput}
              style={{ cursor: "pointer" }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Product preview"
                  className="addproduct-image"
                />
              ) : (
                <span>Click to upload image</span>
              )}
            </div>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <Button
              variant="outline-success"
              className="addproduct-button mt-3"
              onClick={triggerFileInput}
            >
              {image ? "Choose another image" : "Upload image"}
            </Button>
          </Col>

          <Col md={{ span: 5, offset: 1 }} className="addproduct-form-col">
            <div className="addproduct-form-wrapper">
              <Form>
                <Form.Group controlId="formProductName">
                  <Form.Label className="addproduct-label">Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="addproduct-input"
                  />
                </Form.Group>

                <Form.Group controlId="formVendor">
                  <Form.Label className="addproduct-label">Vendor</Form.Label>
                  <Form.Control
                    type="text"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    className="addproduct-input"
                  />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label className="addproduct-label">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="addproduct-input"
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label className="addproduct-label">Price (R)</Form.Label>
                  <Form.Control
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="addproduct-input"
                  />
                </Form.Group>

                <Button
                  variant="outline-success"
                  className="addproduct-button mt-3"
                  onClick={handlePostProduct}
                >
                  Post Product
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProductPage;
