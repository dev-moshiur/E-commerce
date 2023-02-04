import React from "react";
import "./reviews.scss";
import SingleReview from "../singleReview/SingleReview";
export default function Reviews() {
  return (
    <div className="reviews">
      <div className="heading">
        Customers <span>Reviews</span>
      </div>
      <div className="container">
        <SingleReview />
        <SingleReview />
        <SingleReview />
        <SingleReview />
        <SingleReview />
      </div>
    </div>
  );
}
