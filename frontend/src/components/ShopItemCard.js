import { Col } from "react-bootstrap";
import "./css/ShopItemCard.css";
import { Link } from "react-router-dom";

const ShopItemCard = ({productName, productPrice, productRating}) => {
    return (
        <Col md="3">
            <Link to="/product">
                <div className="shop-card-container">
                    <img/>
                    <div className="shop-card-information">
                        <p>{productName ? productName : "Product Name"}</p>
                        <p>R {productPrice ? productPrice : "00.00"}</p>
                        <div>
                            <p>{productRating ? productRating : "0.0"}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default ShopItemCard;