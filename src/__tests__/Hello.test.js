import React from "react";
import { shallow } from "enzyme";
import Hello from "../components/Hello";

describe("Hello component tests", () => {
  it("should render the default prop value", () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.text()).toBe("Hello, world");
  });

  it("should render the prop value passed", () => {
    const wrapper = shallow(<Hello name="Alan" />);
    expect(wrapper.text()).toBe("Hello, Alan");
  });
});
