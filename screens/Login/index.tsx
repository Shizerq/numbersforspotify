import * as React from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useQuery } from "react-query";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/";
import { Params } from "..";

import Button from "../../components/Button";
import Loading from "../../components/Loading";
import LoginGraphics from "../../assets/login.png";

import URLs from "../../api/URLs";
import { fetchToken, fetchSecret } from "../../api";

import * as Styled from "./index.styled";

export const USE_PROXY = Platform.select({
  web: false,
  default: Constants.appOwnership !== "standalone",
});

export const REDIRECT_URI = makeRedirectUri({
  useProxy: USE_PROXY,
  native: "numbersforspotify://redirect",
});

export const Login: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<Params>>();

  const [authCode, setAuthCode] = React.useState<string | undefined>();

  const { data: secret } = useQuery("fetchSecret", () => fetchSecret());

  // Even though request isn't used, it's needed so useAuthRequest works properly
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: secret?.clientId,
      scopes: ["user-top-read"],

      usePKCE: false,

      redirectUri: REDIRECT_URI,
    },
    {
      authorizationEndpoint: URLs.authorizationEndpoint,
      tokenEndpoint: URLs.tokenEndpoint,
    },
  );

  const { isLoading, data } = useQuery(
    "fetchToken",
    () => fetchToken(authCode!),
    {
      enabled: !!authCode,
    },
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      setAuthCode(code);

      if (data) {
        navigation.replace("App");
      }
    }
  }, [response, data]);

  if (isLoading) {
    return (
      <Styled.Background>
        <Loading />
      </Styled.Background>
    );
  }
  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Title>Track your top artists and tracks</Styled.Title>
        <Styled.Image source={LoginGraphics} resizeMode="contain" />
        <Button
          title="Sign in with Spotify"
          onPress={() => promptAsync({ useProxy: USE_PROXY })}
        />
      </Styled.Container>
    </Styled.Background>
  );
};

export default Login;
