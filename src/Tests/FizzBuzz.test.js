import React from 'react';
import ReactDOM from "react-dom";
import { findByTestAttr } from '../Utils'
import { shallow } from  'enzyme'
import FizzBuzz from '../FizzBuzz/FizzBuzz';

describe("Testing App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<FizzBuzz />);
  });

  it("App renders properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders without error", () => {
    const containerElement = findByTestAttr(component, 'container');
    expect(containerElement.length).toBe(1);
  });

  it("Renders form without error", () => {
    const formElement = findByTestAttr(component, 'header');
    expect(formElement.length).toBe(1);
  });
})
