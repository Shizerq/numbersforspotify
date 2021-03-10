import React from "react";
import { mount } from "enzyme";

import RelatedArtists from ".";

describe("RelatedArtists", () => {
  it("should call onPress", () => {
    const onPress = jest.fn();

    const component = mount(
      <RelatedArtists
        onPress={onPress}
        image={{ uri: "https://placekitten.com/200/300" }}
        name="test"
      />,
    );

    component.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
