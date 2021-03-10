import { ReactWrapper } from "enzyme";

export const getByTestID = (testId: string, component: ReactWrapper) => {
  return component.findWhere(node => node.prop("testID") === `${testId}`);
};

export default getByTestID;
