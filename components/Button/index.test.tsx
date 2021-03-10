import React from "react";
import { mount } from "enzyme";

import Button from ".";

describe("Button", () => {
  it("should call onPress", () => {
    const onPress = jest.fn();

    const component = mount(<Button onPress={onPress} title="test" />);

    component.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
