import React from "react";
import { mount } from "enzyme";

import getByTestId from "../../helpers/getByTestId";

import PeriodButton from ".";

describe("PeriodButton", () => {
  const onPress = jest.fn();

  it("should call onPress", () => {
    const component = mount(
      <PeriodButton onPress={onPress} title="test" active={false} />,
    );

    component.props().onPress();
    expect(onPress).toHaveBeenCalled();
  });

  it("line should appear if active equals true", () => {
    const component = mount(
      <PeriodButton onPress={onPress} title="test" active />,
    );
    const line = getByTestId("active-line", component);

    expect(line.exists()).toBeTruthy();
  });

  it("line shouldn't appear if active equals false", () => {
    const component = mount(
      <PeriodButton onPress={onPress} title="test" active={false} />,
    );
    const line = getByTestId("active-line", component);

    expect(line.exists()).toBeFalsy();
  });

  it("active text color", () => {
    const component = mount(
      <PeriodButton onPress={onPress} title="test" active />,
    );
    const text = getByTestId("text", component);

    expect(text.last().prop("style")[0].color).toBe("#ffffff");
  });

  it("idle text color", () => {
    const component = mount(
      <PeriodButton onPress={onPress} title="test" active={false} />,
    );
    const text = getByTestId("text", component);

    expect(text.last().prop("style")[0].color).toBe("#707070");
  });
});
