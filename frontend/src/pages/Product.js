import React from 'react';
import { Container, Row } from 'react-bootstrap';
import placeholder from '../assets/images/call-to-action.jpg';
import { Col } from 'react-bootstrap';
import './css/IndividualProduct.css';
import OutlineButton from '../components/OutlineButton';
import Rating from '@mui/material/Rating';
import Test from '../components/RatingDisplay';


const mockProduct = {
    url: placeholder,
    title: "Her little Glock 18",
    rating: 3.5,
    description: [
        "The perfect self defense tool for the little lady in your life.",
        "Select fire with semi-auto and fully automatic modes.",
        "Beautiful faceted jewels"
    ],
    price: "$149.99"
};


function Product(product = null) {
    // if (!product) {
    //     console.log("Product not found");
    //     return null;
    // }

    return (
         <div>
            <Container style={{marginTop: '40px', marginBottom: '40px'}}>
                <Row style={{ marginTop: '20px', marginBottom: '20px' , color: 'white', textAlign: 'left'}} className='indivProduct-row'>
                    <Col md={6} lg={6} className='product-image-col'>
                        {/* <img src={product.image} alt={product.name} className="product-image" /> */}
                        <img src={mockProduct.url} alt="Product" className='product-image'/>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <div class="product-info">
                        <h1 className="product-title">{mockProduct.title}</h1>
                        <div className="product-rating"><Test value={mockProduct.rating}/></div>
                        <ul className="product-features">
                            <li>{mockProduct.description[0]}</li>
                            <li>{mockProduct.description[1]}</li>
                            <li>{mockProduct.description[2]}</li>
                        </ul>
                        <Row>
                            <Col md={5} className="product-price-col">
                                <p className="product-price">{mockProduct.price}</p>
                            </Col>
                            <Col md={{span: 5, offset: 2}} className="product-buy-col">
                                <OutlineButton buttonLabel={"Buy Now"} buttonLink={'/'} />
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