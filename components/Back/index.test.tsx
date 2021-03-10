import React from "react";
import { mount } from "enzyme";

import Back from ".";

describe("Back", () => {
  it("should call onPress", () => {
    const onPress = jest.fn();

    const component = mount(<Back onPress={onPress} />);

    component.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
