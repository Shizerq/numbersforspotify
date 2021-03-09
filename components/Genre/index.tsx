import * as React from "react";

import * as Styled from "./index.styled";

interface GenreProps {
  name: string;
}

export const PeriodButton: React.FC<GenreProps> = ({ name }) => {
  return (
    <Styled.Container>
      <Styled.Text>{name}</Styled.Text>
    </Styled.Container>
  );
};

export default PeriodButton;
