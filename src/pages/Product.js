import React from 'react';
import { Container, Row } from 'react-bootstrap';
import placeholder from '../assets/images/call-to-action.jpg';
import { Col } from 'react-bootstrap';


function Product(product = null) {
    // if (!product) {
    //     console.log("Product not found");
    //     return null;
    // }

    return (
         <div>
            <Container>
                <Row style={{ marginTop: '20px', marginBottom: '20px' , color: 'white', textAlign: 'left'}}>
                    <Col md={6} lg={6} className='product-image-col'>
                        {/* <img src={product.image} alt={product.name} className="product-image" /> */}
                        <img src={placeholder} alt="Product" style={{maxWidth:'100%'}}/>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <div className="product-info">
                        <h1 className="product-title">Her little Glock 18</h1>
                        <div className="product-rating">★★★★☆</div>
                        <ul className="product-features">
                            <li>The perfect self defense tool for the little lady in your life.</li>
                            <li>Select fire with semi-auto and fully automatic modes.</li>
                            <li>Beautiful faceted jewels</li>
                        </ul>
                        <Row>
                            <Col md={5} className="product-price-col">
                                <div className="product-price">$149.99</div>
                            </Col>
                            <Col md={{span: 5, offset: 2}} className="product-buy-col">
                                <button className="product-buy-btn">Buy</button>
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