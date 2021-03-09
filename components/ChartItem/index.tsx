import * as React from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import * as Styled from "./index.styled";

interface Props {
  image: ImageSourcePropType;
  position: number;
  name: string;
  onPress: () => void;
}

export const ChartItem: React.FC<Props> = ({
  image,
  position,
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Styled.Container>
        <Styled.Image source={image} />
        <Styled.Position>#{position}</Styled.Position>
        <Styled.Name>{name}</Styled.Name>
      </Styled.Container>
    </TouchableOpacity>
  );
};

export default ChartItem;
