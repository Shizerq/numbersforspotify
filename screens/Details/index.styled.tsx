import styled from "styled-components/native";
import Button from "../../components/Button";

export const ContainerView = styled.View`
  flex: 1;
  width: 100%;

  background: #121212;
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  width: 100%;

  background: #121212;
`;

export const DataContainer = styled.View`
  width: 90%;
  margin-top: 5%;
  align-self: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  height: 150px;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #909090;
  font-size: 20px;
  margin-bottom: 5%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-weight: 600;
`;

export const Genres = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.Text`
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  margin-top: 3%;
  margin-left: 5%;
`;

export const PlayOnSpotify = styled(Button)`
  position: absolute;
  width: 90%;
  bottom: 5%;
  align-self: center;
`;
