import * as React from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/";
import { Params } from "..";

import Loading from "../../components/Loading";

import * as Styled from "./index.styled";

export const LoadingScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<Params>>();

  const isLoggedIn = async () => {
    const credentials = await AsyncStorage.getItem("credentials");
    if (credentials) {
      const accessToken = JSON.parse(credentials).access_token;
      if (accessToken) {
        navigation.replace("App");
      } else {
        // Fallback, if accessToken won't exist for some reasons
        navigation.replace("Login");
      }
    } else {
      navigation.replace("Login");
    }
  };

  React.useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <Styled.Background>
      <Loading />
    </Styled.Background>
  );
};

export default LoadingScreen;
