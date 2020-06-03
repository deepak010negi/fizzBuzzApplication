import React from 'react';
import ReactDOM from "react-dom";
import { findByTestAttr } from '../Utils'
import { shallow, mount } from  'enzyme'
import { Result } from '../FizzBuzz/FizzBuzzResult';

describe("Testing FizzBuzz component", () => {
  let component;
  const props = {
    data: [
      'Fizz',
      'Buzz',
    ],
    renderRow: () => {},
  }

  beforeEach(() => {
    component = shallow(<Result data={props.data} renderRow={props.renderRow}/>)
  });

  it("FizzBuzzResult renders properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it("Renders withour error", () => {
    const componentListContainer = findByTestAttr(component, 'displayList');
    expect(componentListContainer.length).toBe(1);
  })

  it("should render results", () => {
    const container = mount(
      <Result data={props.data} renderRow={() => <span>test</span>} />
    );
    const list = findByTestAttr(container, 'displayList');
    expect(list.children()).toHaveLength(2);
  });
})