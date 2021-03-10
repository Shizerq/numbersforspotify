import React from "react";
import { Text } from "react-native";
import { mount } from "enzyme";

import Periods from ".";
import getByTestId from "../../helpers/getByTestId";

describe("Periods", () => {
  const periods = ["period1", "period2"];

  it("should change active period onPress", () => {
    let active = periods[0];
    const setActive = (value: string) => {
      active = value;
    };

    const component = mount(
      <Periods setActive={setActive} active={active} labels={periods}>
        <Text>some content</Text>
      </Periods>,
    );

    const button = getByTestId(periods[1], component);

    button.props().onPress();
    expect(active).toBe(periods[1]);
  });
});
