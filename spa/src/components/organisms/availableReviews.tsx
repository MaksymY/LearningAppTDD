import React from "react";
import { ReviewBlock } from "../molecules/review";
import "./availableReviews.css";

export interface Props { }

export const availableReviews = () => {
  return (
    <div id="wrapper">
      <h1>Available reviews</h1>
      <ReviewBlock/>
      <ReviewBlock/>
      <ReviewBlock/>
      <ReviewBlock/>
      <ReviewBlock/>
    </div>
  )
}