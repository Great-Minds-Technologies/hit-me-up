import './css/Footer.css';
import BigLogo from '../assets/images/Asset_58x.png';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import TiktokLogo from '../assets/images/tiktok.svg';
import FacebookLogo from '../assets/images/facebook.svg';
import YoutubeLogo from '../assets/images/youtube.svg';
import ThreadsLogo from '../assets/images/threads.svg';
import InstagramLogo from '../assets/images/instagram.svg';

function Footer() {
    const LogoRowOne = [ThreadsLogo,TiktokLogo,InstagramLogo];
    const LogoRowTwo = [YoutubeLogo,FacebookLogo,InstagramLogo];

    return (
        <div className='footer'>
            <Container className='footer-container'>
                <Row>
                    <Col md="4" className='logo-link-column'>
                        <Link className='footer-button' to='/'>
                            <img src={BigLogo} className='footer-logo'/>
                        </Link> 
                    </Col>
                    <Col md="4" className='footer-page-links'>
                        <Container>
                            <Row>
                               <Link className='page-link' to='/'>HOME</Link> 
                            </Row>
                            <Row>
                                <Link className='page-link' to='/shop'>SHOP</Link>
                            </Row>
                            <Row>
                                <Link className='page-link' to='/about'>ABOUT</Link>
                            </Row>
                        </Container>
                    </Col>

                    <Col md="4">
                        <Container className='socials-container'>
                            <Row className='socials-row'>
                                {LogoRowOne.map((logo) => (
                                    <Col className='socials-column'>
                                        <img className='footer-socials' src={logo}/>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='socials-row'>
                                {LogoRowTwo.map((logo) => (
                                    <Col className='socials-column'>
                                        <img className='footer-socials' src={logo}/>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;