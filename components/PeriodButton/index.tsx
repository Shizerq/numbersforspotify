import * as React from "react";
import { TouchableOpacity } from "react-native";

import * as Styled from "./index.styled";

interface PeriodButtonProps {
  onPress: () => void;
  title: string;
  active: boolean;
}

export const PeriodButton: React.FC<PeriodButtonProps> = ({
  onPress,
  title,
  active,
}) => {
  return (
    <Styled.Container>
      <TouchableOpacity onPress={onPress}>
        <Styled.Text active={active}>{title}</Styled.Text>
        {active && <Styled.Line />}
      </TouchableOpacity>
    </Styled.Container>
  );
};

export default PeriodButton;
