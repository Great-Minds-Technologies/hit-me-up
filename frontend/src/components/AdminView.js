import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/images/call-to-action.jpg";
import "./css/AdminView.css";
import RatingDisplay from "../components/RatingDisplay";
import axios from "axios";

const AdminView = ({ id }) => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("Her little Glock 18");
  const [vendor, setVendor] = useState("Baby Girl Defense Systems LTD");
  const [rating, setRating] = useState(3.5);
  const [description, setDescription] = useState(
    "The perfect self defense tool for the little lady in your life.\nSelect fire with semi-auto and fully automatic modes.\nBeautiful faceted jewels"
  );
  const [price, setPrice] = useState("149.99");
  const [image, setImage] = useState("");
  const [productID, setProductId] = useState("");

  const [isFlagged, setIsFlagged] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // New: success message state

  const handleDelete = async (e) => {
    console.log("deleting product...");
    try {
      const res = await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
      console.log("Product deleted" + res.data);
      navigate('/shop');
    } catch (error) {
      console.log("Error deleting product");
    }
  };

  const handleStockChange = (e) => {
    setOutOfStock(e.target.checked);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/products/update/${id}`, {
        productName,
        description,
        price,
        rating,
        vendor,
      });

      console.log(res);
      console.log("Successfully updated product");

      setShowSuccess(true); // Show success message

      setTimeout(() => {
        navigate("/shop"); // Redirect after 2 seconds
      }, 800);

    } catch (error) {
      console.log("Error updating product", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = id;
        const res = await axios.get(`http://localhost:5000/api/products/${productId}`);
        const data = res.data;

        setProductName(data.productName || "");
        setVendor(data.vendor || "");
        setRating(data.rating || 0);
        setDescription(data.description || "");
        setPrice(data.price || "");
        setImage(data.image || "");
        setProductId(data._id || "");
        setOutOfStock(data.outOfStock || false);
        setIsFlagged(data.isFlagged || false);
      } catch (error) {
        console.log("Error fetching product details to edit", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="admin-container">
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row className="admin-product-row">
          <Col md={6} lg={6} className="admin-image-col">
            <img src={image} alt="Product" className="admin-image" />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="admin-form-col">
            <div className="admin-form-wrapper">

              {/* Success Message */}
              {showSuccess && (
                <div className="admin-success-popup">
                  Product updated successfully! 
                </div>
              )}

              <Form onSubmit={handleUpdate}>
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
                  <RatingDisplay
                    value={rating}
                    onChange={(e, newRating) => setRating(newRating)}
                    readOnly={false}
                  />
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

                <div className="admin-button-group">
                  <Button
                    variant={isFlagged ? "danger" : "outline-danger"}
                    className="admin-flag-button"
                    onClick={handleDelete}
                  >
                    {isFlagged ? "Flagged" : "Flag Product"}
                  </Button>
                </div>

                 <Button
    variant="danger"
    className="admin-delete-button"
    onClick={handleDelete}
    style={{ marginLeft: "10px" }}
  >
    Delete Product
  </Button>

                <Form.Group controlId="formStock" className="admin-toggle-group">
                  <Form.Label className="admin-label">Out of Stock</Form.Label>
                  <label className="admin-toggle-switch">
                    <input
                      type="checkbox"
                      checked={outOfStock}
                      onChange={handleStockChange}
                    />
                    <span className="admin-slider" />
                  </label>
                </Form.Group>

                <Button variant="outline-warning" className="admin-submit-button" type="submit">
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
