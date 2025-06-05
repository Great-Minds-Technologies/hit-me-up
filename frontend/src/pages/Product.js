import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import placeholder from "../assets/images/call-to-action.jpg";
import "./css/IndividualProduct.css";
import OutlineButton from "../components/OutlineButton";
import RatingDisplay from "../components/RatingDisplay";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom"; //lets us read the id
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../components/ReviewContainer";
// import { set } from "mongoose";

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
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vendor, setVendor] = useState("");
  const [email,setEmail] = useState("");
  const [type, setType] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
    setEmail(JSON.parse(localStorage.getItem("email")));

    console.log("Fetched all");
    
  }, [id]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      console.log("data fetched!" + res.data);
      setImage(res.data.image);
      setProductName(res.data.productName);
      setRating(res.data.rating);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setVendor(res.data.vendor);
      setType(res.data.type);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };
  const addToWishlist = async () => {
    console.log(email);
    
    try {
      const res = await axios.put(`http://localhost:5000/api/users/wishlist/${email}`, {
        productID : id,
      })
      console.log("Product Added To Wishlist");
      
    } catch (error) {
      console.log("Error adding to wishlist"+error);
      
    }
  }

  const handleEditClick = () => {
    navigate("/about"); // Admin page
  };

  return (
    <div className="product-page-container">
      <Link to={`/adminEdit/${id}`}>
      <button className="edit-button">
        Edit
      </button>
      </Link>

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
            <img src={image} alt="Product" className="product-image" />
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <div className="product-info">
              <h1 className="product-title">{productName}</h1>
              <h4 className="product-vendor">{vendor}</h4>
              <h4 className="product-type">{type}</h4> 
              <div className="product-rating">
                <RatingDisplay value={rating} readOnly={true}/>
              </div>
              <p className="product-features">{description}</p>
              <Row>
                <Col md={5} className="product-price-col">
                  <p className="product-price">{`R ` + price}</p>
                </Col>
                <Col md={{ span: 5, offset: 2 }} className="product-buy-col">
                  <OutlineButton buttonLabel={"Buy Now"} buttonLink={"/"} />
                  {/* add to the cart */}
                </Col>
                  <button onClick={addToWishlist}>Wishlist</button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <ReviewContainer productId={id}/>
    </div>
  );
}

export default Product;
