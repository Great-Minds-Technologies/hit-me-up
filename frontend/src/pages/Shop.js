import { Container, Row, Col, Pagination } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton.js";
import "./css/Shop.css";
import ShopItemCard from "../components/ShopItemCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Shop() {
  const [displayMaxCount, setDisplayMaxCount] = useState(20);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [user, setUser] = useState("");

  async function GetCurrentUser() {
        try {
            const _res = await axios.get("http://localhost:5000/api/users/logged", {
                withCredentials: true, // Ensure cookies are sent with the request
            });
            if (_res.data){
              setUser(_res.data.user);
            } 
            
        } catch (error) {
            console.log("Error checking credentials:", error);
        }
    }

  useEffect(() => {
    GetCurrentUser();
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products:", response.data);
        const approvedProducts = response.data.filter( (product) => product.status =="approved");
        setProducts(approvedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="shop-container">
      <div className="shop-submenu">
        <h2 className="shop-title">ALL PRODUCTS</h2>
        {user.role === "admin" || user.role === "vendor" ? (
          <Link to="/addProduct" className="add-product-button">
            + Add Product
          </Link>
        ) : null}
        ;{/* Filter buttons */}
        <div className="shop-filter-wrapper">
          <div className="shop-filter-buttons">
            <button
              className={`shop-filter-button ${
                filter === "all" ? "shop-filter-active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`shop-filter-button ${
                filter === "product" ? "shop-filter-active" : ""
              }`}
              onClick={() => setFilter("product")}
            >
              Products
            </button>
            <button
              className={`shop-filter-button ${
                filter === "service" ? "shop-filter-active" : ""
              }`}
              onClick={() => setFilter("service")}
            >
              Services
            </button>
          </div>
        </div>
      </div>

      {/* Display filtered products */}
      <Container id="shop-item-shop-container" style={{marginTop: '10vh'}}>
        <Row>
          {filteredProducts.slice(0, displayMaxCount).map((product) => (
            <Col xs={12} sm={6} md={4} lg={3}>
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
        {/* <Pagination>

        </Pagination> */}
      </Container>
    </div>
  );
}

export default Shop;
