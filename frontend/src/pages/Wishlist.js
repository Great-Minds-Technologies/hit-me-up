import { Container, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton.js";
import "./css/Shop.css";
import ShopItemCard from "../components/ShopItemCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Wishlist() {
  const [displayMaxCount, setDisplayMaxCount] = useState(20);
  const [products, setProducts] = useState([]);
  const [email,setEmail] = useState("");

 useEffect(() => {
  const storedEmail = JSON.parse(localStorage.getItem("email"));
  if (storedEmail) {
    setEmail(storedEmail);
  }
}, []);

useEffect(() => {
  if (!email) return;

  console.log("Email ready:", email); // ✅ should log correct email

  const fetchProducts = async () => {
    try {
      const userRes = await axios.get(`http://localhost:5000/api/users/${encodeURIComponent(email)}`);
      const productIDs = userRes.data.wishlist;
      const productPromises = productIDs.map(id =>
        axios.get(`http://localhost:5000/api/products/${id}`)
      );
      const productResponses = await Promise.all(productPromises);
      setProducts(productResponses.map(res => res.data));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  fetchProducts();
}, [email]);

  return (
    <div className="shop-container">
      <Container id="shop-item-shop-container">
        <Row className="g-4 justify-content-center">
          {products.slice(0, displayMaxCount).map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/product/${product._id}`}>
               
                  <ShopItemCard
                    productImage={product.image}
                    productName={product.productName}
                    productPrice={product.price}
                    productRating={product.rating}
                  />
              
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Wishlist;
