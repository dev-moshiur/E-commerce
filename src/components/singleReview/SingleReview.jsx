import React from "react";
import "./singleReview.scss";
import photo from "../../images/f-1-1.png";

import { Star } from "@material-ui/icons";
export default function SingleReview() {
  return (
    <div className="singleReviews">
      <div className="imgCintainer">
        <img src={photo} alt="" />
      </div>
      <div className="name">Md Siam Bappi</div>
      <div className="rate">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium
        facere deserunt non accusamus unde minima, illo distinctio ullam
        laborum, vel
      </div>
    </div>
  );
}
