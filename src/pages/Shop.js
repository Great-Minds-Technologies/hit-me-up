import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import OutlineButton from "../components/OutlineButton";
import "./css/Shop.css";

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
        </div>
    )
}

export default Shop;