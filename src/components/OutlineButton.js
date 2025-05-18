import { Button } from "react-bootstrap";
import './css/OutlineButton.css';
import { Link } from "react-router-dom";

const OutlineButton = ({buttonLabel, buttonLink}) => {
    return (
        <div className="button-container">
            <Link className="button-link" to={buttonLink}>
                <Button className="button-component">
                    {buttonLabel}
                </Button>
            </Link>
        </div>
    );
}

export default OutlineButton;