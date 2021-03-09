import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  border-radius: 100px;

  background-color: #1db954;

  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  align-self: center;

  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const Spotify = styled.Image`
  width: 27px;
  height: 27px;

  align-self: center;

  margin-right: 2.5%;
`;
