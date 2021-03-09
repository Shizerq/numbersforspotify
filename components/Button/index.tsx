import * as React from "react";

import * as Styled from "./index.styled";
import Logo from "../../assets/spotify_logo.png";

interface Props {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress, ...rest }) => {
  return (
    <Styled.Container onPress={onPress} {...rest}>
      <Styled.Spotify resizeMode="contain" source={Logo} />
      <Styled.Text>{title}</Styled.Text>
    </Styled.Container>
  );
};

export default Button;
