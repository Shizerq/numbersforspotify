import * as React from "react";
import { FlatList } from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";

import API from "../../api";
import { ArtistObjectFull } from "../../types/spotify-web-api-js";

import ChartItem from "../../components/ChartItem";
import Periods from "../../components/Periods";
import Loading from "../../components/Loading";

import * as Styled from "./index.styled";

export const TopArtists: React.FC = () => {
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

    return sp.getMyTopArtists({
      limit: 50,
      time_range: currentPeriod[active],
    });
  };

  const { isFetching, isLoading, data, refetch } = useQuery("topArtists", () =>
    getData(),
  );

  const renderItem = (item: ArtistObjectFull, index: number) => {
    return (
      <ChartItem
        key={item.id}
        onPress={() =>
          navigation.navigate("Details", {
            type: "artist",
            id: item.id,
            title: item.name,
            image: item.images[0],
            genres: item.genres,
            followers: item.followers.total,
            popularity: item.popularity,
            url: item.external_urls.spotify,
          })
        }
        position={index + 1}
        image={item.images[0]}
        name={item.name}
      />
    );
  };

  React.useEffect(() => {
    refetch();
  }, [active]);

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

export default TopArtists;
