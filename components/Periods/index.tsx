import * as React from "react";
import { ScrollView, Dimensions } from "react-native";
import * as Styled from "./index.styled";

import PeriodButton from "../PeriodButton";

interface Props {
  children: React.ReactChild;
  labels: string[];
  active: string;
  setActive: (
    value: string,
  ) => void | React.Dispatch<React.SetStateAction<string>>;
}

export const Periods: React.FC<Props> = ({
  children,
  labels,
  active,
  setActive,
}) => {
  const [tabsWidth, setTabsWidth] = React.useState(0);

  const onContentSizeChange = (contentWidth: number) => {
    setTabsWidth(contentWidth);
  };

  return (
    <Styled.Container>
      <Styled.PeriodsContainer>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 20,
            flexGrow: 1,
            paddingTop: 0.5,
            flexDirection: "row",
          }}
          scrollEnabled={Boolean(tabsWidth > Dimensions.get("window").width)}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={onContentSizeChange}
        >
          {labels.map(label => {
            const isActive = Boolean(active === label);

            return (
              <PeriodButton
                key={label}
                active={isActive}
                title={label}
                onPress={() => setActive(label)}
                testID={label}
              />
            );
          })}
        </ScrollView>
      </Styled.PeriodsContainer>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  );
};

export default Periods;
