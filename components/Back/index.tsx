import * as React from "react";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";
import * as Styled from "./index.styled";

export const Button: React.FC<StackHeaderLeftButtonProps> = ({
  onPress,
  ...rest
}) => {
  return (
    <Styled.Button onPress={onPress} {...rest}>
      <Styled.Background>
        <Styled.Back color="white" size={22} name="ios-arrow-back" />
      </Styled.Background>
    </Styled.Button>
  );
};

export default Button;
