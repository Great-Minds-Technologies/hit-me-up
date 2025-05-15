import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton";
import "./css/Shop.css";
import Cart from '../pages/Cart.js'

function Shop() {
    return (
        <div>
            <div>
                <h2 className="shop-title">ALL PRODUCTS</h2>
                <div className="filter-options">
                    <OutlineButton buttonLabel="Shop By Category"/>
                    <Form>
                        <Typeahead
                            className='form-input'
                            onChange={(selected) => {
                            }}
                            options={['','','']}
                            selected=''
                            placeholder='Card Name...'
                            inputProps={{
                                className:'form-text'
                            }}
                        />
                    </Form>
                </div>
            </div>

            {/* // adding the chart here so that i can check it outline */}
            <Cart/>
        </div>
    )
}

export default Shop;