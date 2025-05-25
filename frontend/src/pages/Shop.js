import { Container, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton.js";
import "./css/Shop.css";
import Cart from './Cart.js'
import { useEffect, useState } from 'react';

function Shop() {
    const [displayCount, setDisplayCount] = useState(20);
    let count = 0;
    let shopRows;

    for (let _i = 0; _i <= Math.trunc(displayCount/4); _i++) {
        shopRows.push()
    }

    return (
        <div>
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
            </Container>
        </div>
    )
}

export default Shop;