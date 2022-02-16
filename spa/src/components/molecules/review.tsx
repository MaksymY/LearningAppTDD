import * as React from 'react';
import { ReviewContent } from '../atoms/reviewContent';
import { ReviewDeck } from '../atoms/reviewDeck';
export interface Props {}

export const ReviewBlock :React.FunctionComponent<Props> = () => {
  return(
    <div id="reviewBlocks">
      <ReviewDeck/>
      &emsp;
      <ReviewContent/>
    </div>
  )

}