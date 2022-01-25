import React from "react";

import { RichSection } from "../../components/organisms/RichSection";

export interface Props {}

export const Application: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <div>This is your app!</div>
      <RichSection title="Test" desc="test">
        <div>test contenu</div>
      </RichSection>
    </div>
  )
};
