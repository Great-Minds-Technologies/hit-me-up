import { Button, Container, Form, Row, Col } from "react-bootstrap";
import RatingDisplay from "./RatingDisplay";
import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection";
import "./css/ReviewContainer.css";
import axios from "axios";

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

    async function CaptureReviewInformation () {
        try {
            const _tempUser = await axios.get(`http://localhost:5000/api/user/logged`);
            const _currentUser = await axios.get(`http://localhost:5000/api/user/${_tempUser.data.user.email}`);
            const _tempResult = await axios.post(`http://localhost:5000/api/products/${productId}/review/post`, {
                _rating: itemRating,
                _productReview: reviewText,
                _user: _currentUser
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    async function GrabReviews() {
        try {
            const _reviews = await axios.get(`http://localhost:5000/api/products/${productId}/reviews`);
            // const _reviews = await axios.get(`http://localhost:5000/api/reviews/`);
            console.log(_reviews.data);
            setReviews(_reviews.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        GrabReviews();
    },[]); 

    return (
        <div>
            <Form className="review-form" onSubmit={CaptureReviewInformation}>
                <div className="review-rating-display">
                    <RatingDisplay  onChange={setItemRating}/>
                </div>
                <textarea
                    className="review-text-input"
                    placeholder="Review (Optional)"
                    onChange={setReviewText}
                />
                <Button className="review-submit-button" type="submit">Post Review</Button>
            </Form>
            <Container>
                <hr/>
                <ReviewRows/>
            </Container>
            
        </div>
    );
}

export default ReviewContainer;