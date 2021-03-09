import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Background = styled.View`
  flex: 1;
  width: 100%;

  background: #121212;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 90%;
  align-self: center;
`;

export const Title = styled.Text`
  width: 90%;
  align-self: center;

  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;

  margin-top: 5%;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.6}px;
  margin-vertical: 10%;
`;
