import React from "react";
import { mount } from "enzyme";

import ChartItem from ".";

describe("ChartItem", () => {
  it("should call onPress", () => {
    const onPress = jest.fn();

    const component = mount(
      <ChartItem
        onPress={onPress}
        image={{ uri: "https://placekitten.com/200/300" }}
        position={1}
        name="test"
      />,
    );

    component.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
