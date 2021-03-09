import * as React from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Loading: React.FC<Props> = ({ style }) => {
  return (
    <ActivityIndicator
      size="large"
      style={[
        style,
        {
          flex: 1,
          justifyContent: "center",
        },
      ]}
    />
  );
};

export default Loading;
