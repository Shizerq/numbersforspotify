import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get("screen").height * 0.5}px;
`;

export const Container = styled.View`
  height: ${Dimensions.get("screen").height * 0.5}px;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #ffffff;
  font-weight: 800;

  position: absolute;
  bottom: 2%;
  margin-left: 5%;
  width: 80%;

  z-index: 2;
`;
