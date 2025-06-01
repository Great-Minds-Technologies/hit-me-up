import { Button, Container, Form, Row, Col } from "react-bootstrap";
import RatingDisplay from "./RatingDisplay";
import { useState } from "react";
import ReviewSection from "./ReviewSection";
import "./css/ReviewContainer.css";

const ReviewContainer = ({productId}) => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState([]);
    const [itemRating, setItemRating] = useState([]);

    let _reviewRows = [];

    const ReviewRows = () => {
        let _tempRow = [];
        
        for (let _i = 0; _i < reviews.length; _i++) {
            _tempRow.push(<ReviewSection/>);

            if (_i % 3 === 0) {
                _reviewRows.push(
                    <Row>
                        <_tempRow/>
                    </Row>
                )
            }
            
        }
        _reviewRows.push(
            <Row>
                <_tempRow/>
            </Row>
        )
    }

    function CaptureReviewInformation () {

    }

    return (
        <div>
            <Form onSubmit={CaptureReviewInformation}>
                <RatingDisplay onChange={itemRating}/>
                <input
                    className="review-text-input"
                    placeholder="Review (Optional)"
                    onChange={setReviewText}
                />
                <Button type="submit">Post Review</Button>
            </Form>
            <Container>
                <hr/>
                <ReviewRows/>
            </Container>
            
        </div>
    );
}

export default ReviewContainer;