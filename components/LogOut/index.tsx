import * as React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import AsyncStorage from "@react-native-community/async-storage";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/";
import { Params } from "../../screens";

import { queryClient } from "../../App";

export const LogOut: React.FC = ({ ...rest }) => {
  const navigation = useNavigation<StackNavigationProp<Params>>();

  const handlePress = React.useCallback(() => {
    Alert.alert(
      "Are you sure you want to sign out",
      "You can sign in again later",
      [
        {
          text: "Cancel",
        },
        {
          text: "Sign out",
          onPress: () => {
            queryClient.clear();
            AsyncStorage.clear();
            navigation.replace("Loading");
          },
        },
      ],
      { cancelable: true },
    );
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} {...rest}>
      <MaterialCommunityIcons size={22.5} name="logout" color="#ffffff" />
    </TouchableOpacity>
  );
};

export default LogOut;
