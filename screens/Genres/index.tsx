import * as React from "react";
import { useQuery } from "react-query";
import { Dimensions } from "react-native";
import * as R from "ramda";
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph";

import API from "../../api";

import Periods from "../../components/Periods";
import Loading from "../../components/Loading";

import * as Styled from "./index.styled";

export const Genres: React.FC = () => {
  interface currentPeriod {
    [name: string]: string;
  }

  interface genresType {
    [name: string]: number;
  }

  const periods = ["All time", "Last 4 weeks", "Last 6 months"];

  const currentPeriod: currentPeriod = {
    "All time": "long_term",
    "Last 4 weeks": "short_term",
    "Last 6 months": "medium_term",
  };

  const [active, setActive] = React.useState<string>(periods[0]);
  const [genres, setGenres] = React.useState<genresType | undefined>();

  const getData = async () => {
    const sp = await API();

    return sp.getMyTopArtists({
      limit: 50,
      time_range: currentPeriod[active],
    });
  };

  const { isFetching, isLoading, data, refetch } = useQuery("topGenres", () =>
    getData(),
  );

  React.useEffect(() => {
    refetch();
  }, [active]);

  React.useEffect(() => {
    if (data) {
      // TO DO - fix typing in R.countBy
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const countedGenres: genresType = R.countBy(item => item)(
        data?.items.flatMap(data => data.genres),
      );

      const sorted: genresType = Object.fromEntries(
        Object.entries(countedGenres).sort((a, b) => b[1] - a[1]),
      );

      setGenres(sorted);
    }
  }, [data]);

  const config = {
    hasYAxisBackgroundLines: false,
    xAxisLabelStyle: {
      width: 135,
      fontSize: 12,
      xOffset: -50,
      color: "#ffffff",
    },
    hasYAxisLabels: false,
  };

  if (isLoading || !genres)
    return (
      <Styled.Background>
        <Loading />
      </Styled.Background>
    );

  return (
    <Styled.Background>
      <Periods setActive={setActive} active={active} labels={periods}>
        {isFetching ? (
          <Loading />
        ) : (
          genres && (
            <>
              <Styled.Title>
                Your top genre is {Object.keys(genres)[0]}
              </Styled.Title>
              <HorizontalBarGraph
                data={Object.values(genres).slice(0, 15)}
                labels={Object.keys(genres).slice(0, 15)}
                width={Dimensions.get("window").width * 0.9}
                height={Dimensions.get("window").height * 0.6}
                barRadius={5}
                // Bad types in the library, gotta create an issue
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                baseConfig={config}
                barWidthPercentage={0.5}
                barColor="#1db954"
                style={{ padding: 0, margin: 0 }}
              />
            </>
          )
        )}
      </Periods>
    </Styled.Background>
  );
};

export default Genres;
