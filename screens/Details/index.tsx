import * as React from "react";
import { FlatList } from "react-native";
import * as Linking from "expo-linking";

import { useQuery } from "react-query";
import API from "../../api";

import { DetailsParams } from "..";

import DetailsImage from "../../components/DetailsImage";
import Genre from "../../components/Genre";
import Loading from "../../components/Loading";
import RelatedArtist from "../../components/RelatedArtist";

import * as Styled from "./index.styled";

interface Props {
  route: DetailsParams;
}

export const Details: React.FC<Props> = ({ route }) => {
  const {
    type,
    title,
    image,
    genres,
    followers,
    popularity,
    id,
    album,
    artists,
    url,
  } = route.params;

  const getData = async () => {
    const sp = await API();

    return sp.getArtistRelatedArtists(id);
  };

  const { isFetching, isLoading, data } = useQuery(
    "relatedArtists",
    () => getData(),
    {
      enabled: Boolean(type === "artist"),
    },
  );

  if (isLoading) {
    return (
      <Styled.ContainerView>
        <Loading />
      </Styled.ContainerView>
    );
  }

  if (type === "artist") {
    return (
      <Styled.ContainerScroll contentContainerStyle={{ paddingBottom: "15%" }}>
        <DetailsImage title={title} image={image} />
        <Styled.DataContainer>
          <Styled.Text>
            <Styled.Title>Followers: </Styled.Title>
            {followers.toLocaleString()}
          </Styled.Text>
          <Styled.Text>
            <Styled.Title>Popularity: </Styled.Title> {popularity}
          </Styled.Text>
          <Styled.Genres>
            {genres.map((genre: string) => (
              <Genre key={genre} name={genre} />
            ))}
          </Styled.Genres>
        </Styled.DataContainer>

        {isFetching ? (
          <Styled.LoadingContainer>
            <Loading />
          </Styled.LoadingContainer>
        ) : (
          <>
            <Styled.SectionTitle>Related artists</Styled.SectionTitle>
            <FlatList
              horizontal
              style={{ marginTop: "5%" }}
              showsHorizontalScrollIndicator={false}
              refreshing={isFetching}
              data={data?.artists}
              contentContainerStyle={{ marginLeft: "5%" }}
              renderItem={({ item }) => (
                <RelatedArtist
                  onPress={() => Linking.openURL(item.external_urls.spotify)}
                  name={item.name}
                  image={item.images[1]}
                />
              )}
            />
          </>
        )}
      </Styled.ContainerScroll>
    );
  }

  return (
    <Styled.ContainerView>
      <DetailsImage title={title} image={image} />
      <Styled.DataContainer>
        <Styled.Text>
          <Styled.Title>Artists: </Styled.Title>
          {artists && artists.map(artist => `${artist.name} `)}
        </Styled.Text>
        <Styled.Text>
          <Styled.Title>Album: </Styled.Title>
          {album}
        </Styled.Text>
        <Styled.Text>
          <Styled.Title>Popularity: </Styled.Title>
          {popularity}
        </Styled.Text>
      </Styled.DataContainer>

      <Styled.PlayOnSpotify
        onPress={() => Linking.openURL(url)}
        title="Play on Spotify"
      />
    </Styled.ContainerView>
  );
};

export default Details;
