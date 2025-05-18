import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton";
import "./css/Shop.css";
import Cart from '../pages/Cart.js'

function Shop() {
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
                        placeholder='Card Name...'
                        clearButton={true}
                        inputProps={{
                            className:'form-text'
                        }}
                    />
                </div>
            </div>

            {/* // adding the chart here so that i can check it outline */}
            <Cart/>
        </div>
    )
}

export default Shop;