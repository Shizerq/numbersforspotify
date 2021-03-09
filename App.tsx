/* eslint-disable react/style-prop-object */
import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "./screens";

export const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <Main />
    </QueryClientProvider>
  );
};

export default App;
