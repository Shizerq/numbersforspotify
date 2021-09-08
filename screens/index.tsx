import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { Dimensions, ImageSourcePropType } from "react-native";

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoadingScreen from "./Loading";
import Login from "./Login";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";
import Details from "./Details";
import Genres from "./Genres";

import Back from "../components/Back";
import LogOut from "../components/LogOut";
import { ArtistObjectSimplified } from "../types/spotify-web-api-js";

import i18n from "../translations";

export type Params = {
  Details: {
    type: "artist" | "track";
    title: string;
    image: ImageSourcePropType;
    genres: string[];
    followers: number;
    popularity: number;
    id: string;
    album: string;
    artists: ArtistObjectSimplified[];
    url: string;
  };

  App: undefined;
  Loading: undefined;
  Login: undefined;
};

export type DetailsParams = RouteProp<Params, "Details">;

const TopArtistsStack = createStackNavigator();
const TopSongsStack = createStackNavigator();
const GenresStack = createStackNavigator();
const RootStack = createStackNavigator<Params>();

const TabsBottomNavigator = createBottomTabNavigator();

const bigHeader = {
  headerStyle: {
    backgroundColor: "#121212",
    height: Dimensions.get("window").height * 0.15,
    shadowOpacity: 0,
  },
  headerTruncatedBackTitle: "Back",
  headerTitleStyle: {
    fontSize: 34,
    color: "#FFFFFF",
    width: Dimensions.get("window").width,
    paddingLeft: "6%",
    marginTop: "3%",
  },
};

const headerLogOut = {
  headerRight: () => <LogOut />,
  headerRightContainerStyle: {
    marginRight: "6%",
  },
};

export const TopArtistsScreen: React.FC = () => {
  return (
    <TopArtistsStack.Navigator>
      <TopArtistsStack.Screen
        name="TopArtists"
        component={TopArtists}
        options={{
          ...bigHeader,
          ...headerLogOut,
          title: i18n.t("screens.topArtists"),
        }}
      />
    </TopArtistsStack.Navigator>
  );
};

export const TopSongsScreen: React.FC = () => {
  return (
    <TopSongsStack.Navigator>
      <TopSongsStack.Screen
        name="TopSongs"
        component={TopSongs}
        options={{
          ...bigHeader,
          ...headerLogOut,
          title: i18n.t("screens.topSongs"),
        }}
      />
    </TopSongsStack.Navigator>
  );
};

export const GenresScreen: React.FC = () => {
  return (
    <GenresStack.Navigator>
      <GenresStack.Screen
        name="Genres"
        component={Genres}
        options={{
          ...bigHeader,
          ...headerLogOut,
          title: i18n.t("screens.genres"),
        }}
      />
    </GenresStack.Navigator>
  );
};

export const App: React.FC = () => {
  return (
    <TabsBottomNavigator.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#282828", borderTopWidth: 0 },
        activeTintColor: "#FFFFFF",
      }}
    >
      <TabsBottomNavigator.Screen
        name="TopArtists"
        component={TopArtistsScreen}
        options={{
          title: i18n.t("screens.topArtists"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-music"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <TabsBottomNavigator.Screen
        name="TopSongs"
        component={TopSongsScreen}
        options={{
          title: i18n.t("screens.topSongs"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music" color={color} size={25} />
          ),
        }}
      />
      <TabsBottomNavigator.Screen
        name="Genres"
        component={GenresScreen}
        options={{
          title: i18n.t("screens.genres"),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={25} />
          ),
        }}
      />
    </TabsBottomNavigator.Navigator>
  );
};

export const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Loading">
        <RootStack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <RootStack.Screen
          name="App"
          component={App}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <RootStack.Screen
          name="Details"
          component={Details}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#ffffff",
            headerLeftContainerStyle: { marginLeft: "3%" },
            headerLeft: props => <Back {...props} />,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
