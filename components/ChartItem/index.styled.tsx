import styled from "styled-components/native";
import { scale } from "react-native-size-matters";

export const Container = styled.View`
  width: ${scale(150)}px;
`;

export const Image = styled.Image`
  width: ${scale(150)}px;
  height: ${scale(150)}px;
`;

export const Position = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;

  margin-top: 5%;
  margin-bottom: 2%;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #707070;
`;
