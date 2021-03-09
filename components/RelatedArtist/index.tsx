import * as React from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import * as Styled from "./index.styled";

interface Props {
  image: ImageSourcePropType;
  name: string;
  onPress: () => void;
}

export const RelatedArtist: React.FC<Props> = ({ image, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Styled.Container>
        <Styled.Image source={image} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.Container>
    </TouchableOpacity>
  );
};

export default RelatedArtist;
