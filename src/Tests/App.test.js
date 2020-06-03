import React from 'react';
import ReactDOM from "react-dom";
import { findByTestAttr } from '../Utils'
import { shallow } from  'enzyme'
import FizzBuzz from '../App';

describe("Testing FizzBuzz component", () => {
  let component;
  beforeEach(() => {
   component = shallow(<FizzBuzz />);
  });

  it("App renders properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it("Renders withour error", () => {
    const AppComponent = findByTestAttr(component, 'app');
    expect(AppComponent.length).toBe(1);
  })
})
