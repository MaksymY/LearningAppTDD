import React from "react";
import { ReviewBlock } from "../molecules/review";

export interface Props { }

export const availableReviews = () => {
  return (
    <div>
      <h1>Available reviews</h1>
      <ReviewBlock></ReviewBlock>
      <ReviewBlock></ReviewBlock>
      <ReviewBlock></ReviewBlock>
      <ReviewBlock></ReviewBlock>
    </div>
  )
}