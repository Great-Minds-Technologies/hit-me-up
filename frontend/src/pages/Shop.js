import { Container, Row, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton.js";
import "./css/Shop.css";
import Cart from './Cart.js'
import { useEffect, useState } from 'react';
import ShopItemCard from "../components/ShopItemCard.js";
import axios from 'axios';

function Shop() {
    const [displayMaxCount, setDisplayMaxCount] = useState(20);
    const [products, setProducts] = useState([]);
    let count = 0;
    let shopRows = [];
    let _tempRow = [];

    for (let _i = 0; _i < products.length && _i < displayMaxCount; _i++) {
        _tempRow.push(<ShopItemCard productImage={products[_i].image} productName={products[_i].productName} productPrice={products[_i].price} productRating={products[_i].rating}/>);
        if (_i === 3 || _i + 1 === products.length || _i + 1 === displayMaxCount) {
            shopRows.push(
                <Row>
                    {_tempRow}
                </Row>
            );
            _tempRow = [];
        }
        
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                console.log('Fetched products:', response.data);

                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="shop-container">
            <div className="shop-submenu">
                <h2 className="shop-title">ALL PRODUCTS</h2>
                <div className="filter-options">
                    <div className="filter-button-holder">
                        <OutlineButton className="filter-button" buttonLabel="Shop By Category"/>
                    </div>
                    <Typeahead
                        className='form-input'
                        onChange={(selected) => {
                        }} 
                        options={['','','']}
                        selected=''
                        placeholder='Search'
                        clearButton={true}
                        inputProps={{
                            className:'form-text'
                        }}
                    />
                </div>
            </div>
            <Container>
                {shopRows}
            </Container>
        </div>
    )
}

export default Shop;