/* eslint-disable camelcase */
import * as React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";

import API from "../../api";
import { TrackObject } from "../../types/spotify-web-api-js";

import ChartItem from "../../components/ChartItem";
import Periods from "../../components/Periods";
import Loading from "../../components/Loading";

import * as Styled from "./index.styled";

export const TopSongs: React.FC = () => {
  interface currentPeriod {
    [name: string]: string;
  }

  const navigation = useNavigation();

  const periods = ["All time", "Last 4 weeks", "Last 6 months"];

  const currentPeriod: currentPeriod = {
    "All time": "long_term",
    "Last 4 weeks": "short_term",
    "Last 6 months": "medium_term",
  };

  const [active, setActive] = React.useState<string>(periods[0]);

  const getData = async () => {
    const sp = await API();

    return sp.getMyTopTracks({
      limit: 50,
      time_range: currentPeriod[active],
    });
  };

  const { isFetching, isLoading, data, refetch } = useQuery("topSongs", () =>
    getData(),
  );

  React.useEffect(() => {
    refetch();
  }, [active]);

  const renderItem = (item: TrackObject, index: number) => {
    return (
      <ChartItem
        key={item.id}
        onPress={() =>
          navigation.navigate("Details", {
            type: "track",
            title: item.name,
            image: item.album.images[0],
            album: item.album.name,
            artists: item.artists,
            popularity: item.popularity,
            url: item.external_urls.spotify,
          })
        }
        position={index + 1}
        image={item.album.images[0]}
        name={item.name}
      />
    );
  };

  if (isLoading)
    return (
      <Styled.Background>
        <Loading />
      </Styled.Background>
    );
  return (
    <Styled.Background>
      <Periods setActive={setActive} active={active} labels={periods}>
        {isFetching ? (
          <Styled.Background>
            <Loading />
          </Styled.Background>
        ) : (
          <FlatList
            numColumns={2}
            refreshing={isFetching}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: "space-between",
              marginVertical: 8,
            }}
            data={data?.items}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
        )}
      </Periods>
    </Styled.Background>
  );
};

export default TopSongs;
