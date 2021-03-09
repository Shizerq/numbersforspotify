import * as React from "react";
import { ImageSourcePropType } from "react-native";

import * as Styled from "./index.styled";

interface DetailsImageProps {
  title: string;
  image: ImageSourcePropType;
}

export const DetailsImage: React.FC<DetailsImageProps> = ({ title, image }) => {
  return (
    <Styled.Container>
      <Styled.Gradient colors={["transparent", "rgba(0,0,0,0.25)"]} />
      <Styled.Image source={image} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

export default DetailsImage;
