import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './css/Admin.css';
import { Container, Row, Col } from "react-bootstrap";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [vendor, setVendor] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [productId, setProductId] = useState([]);
  const [productImage, setProductImage] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({
        productName,
        description,
        price: parseFloat(price),
        image,
        rating: parseFloat(rating),
        vendor,
        type,
      });

      const res = await axios.post(
        "http://localhost:5000/api/products/register",
        {
          productName,
          description,
          price: parseFloat(price),
          image,
          rating: parseFloat(rating),
          vendor,
          type,
        }
      );
      setMessage("Product added successfully!");
      console.log(res.data);
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to add product.");
    }
  };

  const fetchProducts = async () =>{
    try {
      console.log("Fetching product IDs...");
      
      const res = await axios.get("http://localhost:5000/api/products");
      console.log("fetched!");
      
      const ids = res.data.map(product => product._id);
      const dataImages = res.data.map(product => product.image);
      setProductId(ids);
      setProductImage(dataImages);
    } catch (error) {
      console.error("Error fetching product IDs:", error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container className="admin-form-container">
      <Row>
        <Col className="admin-form-column" md="6">
            <h2 className="admin-form-heading">Create a Product</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="admin-form-input-component"
                type="text"
                placeholder="Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <br />
        
              <textarea
                className="admin-form-input-component"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <br />
        
              <input
                className="admin-form-input-component"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <br />
        
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
              <br />
            
              <input
                className="admin-form-input-component"
                type="number"
                placeholder="Rating (0-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                step="0.1"
                required
              />
              <br />
            
              <input
               className="admin-form-input-component"
                type="text"
                placeholder="Vendor"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                required
              />
              <br />
            
              <input
                className="admin-form-input-component"
                type="text"
                placeholder="Type (e.g., product or service)"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              />
              <br />
            
              <button type="submit">Submit Product</button>
            </form>
        </Col>
          {image && (
                <img
                  src={image}
                  alt="Preview"
                />
              )}
        <Col md="6">
        </Col>
      </Row>
      

      
    </Container>
  );
}

export default ProductForm;
