import React from "react";
import { Container, Row } from "react-bootstrap";
import placeholder from "../assets/images/call-to-action.jpg";
import { Col } from "react-bootstrap";
import "./css/IndividualProduct.css";
import OutlineButton from "../components/OutlineButton";
import Rating from "@mui/material/Rating";
import RatingDisplay from "../components/RatingDisplay";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const mockProduct = {
  image: placeholder,
  productName: "Her little Glock 18",
  rating: 3.5,
  description: [
    "The perfect self defense tool for the little lady in your life.",
    "Select fire with semi-auto and fully automatic modes.",
    "Beautiful faceted jewels",
  ],
  price: "$149.99",
  vendor: "Baby Girl Defense Systems LTD",
};

function Product() {
  // if (!product) {
  //     console.log("Product not found");
  //     return null;
  // }
  //Test ids
  // 682f08248ce65d663109421b
  // 682f0c54492bf60f7f8ccdce
  // 6830978f0264e638c8ef65ed
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vendor, setVendor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, [id]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      console.log("data fetched!" + res.data);
      setImage(res.data.image);
      setProductName(res.data.productName);
      setRating(res.data.rating);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setVendor(res.data.vendor);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };
  return (
    <div>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: "white",
            textAlign: "left",
          }}
          className="indivProduct-row"
        >
          <Col md={6} lg={6} className="product-image-col">
            {/* <img src={product.image} alt={product.name} className="product-image" /> */}
            <img src={image} alt="Product" className="product-image" />
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <div className="product-info">
              <h1 className="product-title">{productName}</h1>
              <h4 className="product-vendor">{vendor}</h4>
              <div className="product-rating">
                <RatingDisplay value={rating} />
              </div>
              <p className="product-features">{description}</p>
              <Row>
                <Col md={5} className="product-price-col">
                  <p className="product-price">{`R ` + price}</p>
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="product-buy-col">
                  <OutlineButton buttonLabel={"Buy Now"} buttonLink={"/"} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
