import { Col, Container, Row } from 'react-bootstrap';
import FeaturedCard from '../components/FeaturedCard';
import OutlineButton from '../components/OutlineButton';
import CTABillboard from '../assets/images/call-to-action.jpg';
import './css/Home.css'
import { useState } from 'react';

function Home() {
    const [hitmen, setHitmen] = useState();
    const [products, setProducts] = useState();

    return (
        <div className="home-container">
            <div className='landing-hero-section'>
                <OutlineButton buttonLabel='MEET THE MAN' buttonLink='/log-in'/>
                <hr className='hero-divider'/>
            </div>

            <div className='landing-cta-section'>
                <Container>
                    <Row>
                        <Col sm="8">
                            <div className='cta-image-container'>
                                <img className='cta-image' src={CTABillboard}/>
                            </div>
                        </Col>
                        <Col sm="4">
                            <h2 className='cta-heading'>HEY, YOU</h2>
                            <p className='cta-text'>Welcome to the Internet's worst-kept secret. Whether it's your boss, your ex, or that guy who double parked in your spot... We “fix” problems. You just send the name. We handle the rest.</p>
                            <h2 className='cta-heading'>ALREADY PART OF THE UNDERGROUND ELITE?</h2>
                            <p className='cta-text'>Already part of the underground elite? Sign in to access your hit history, view progress, or upgrade to Premium Discreet&trade;.</p>
                            <OutlineButton buttonLabel="Log In" buttonLink="/log-in"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='landing-featured-section'>
                <Container>
                    <hr className='hitmen-divider'/>
                    <Row className='featured-row'>
                        <h3 id='featured-hitmen-title'>Featured Hitmen</h3>
                        {hitmen ? hitmen.map((index) =>
                            <Col sm='3'>
                                <FeaturedCard
                                    description={index.description}
                                    image={index.image}
                                    name={index.name}
                                    price={index.price}
                                />
                            </Col>
                        ):
                        <Col sm = '3'>
                            <FeaturedCard/>
                        </Col> }
                    </Row>
                    <hr className='products-divider'/>
                    <Row className='featured-row'>
                        <h3 id='featured-products-title'>Featured Products</h3>
                        {products ? products.map((index) =>
                            <Col sm='3'>
                                <FeaturedCard
                                    description={index.description}
                                    image={index.image}
                                    name={index.name}
                                    price={index.price}
                                />
                            </Col>
                        ):
                        <Col sm = '3'>
                            <FeaturedCard/>
                        </Col> }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home;