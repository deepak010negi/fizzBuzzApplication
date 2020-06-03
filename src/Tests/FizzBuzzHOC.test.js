import React from 'react';
import ReactDOM from "react-dom";
import { shallow } from  'enzyme'
import FizzBuzzHOC, { generateFBResult } from '../FizzBuzz/withFizzBuzzHOC';

describe("Testing FizzBuzz component", () => {
  let component;
  beforeEach(() => {
    const props = {
      formValues:  {
        fizz: 0,
        buzz: 0,
        listLength: 0,
      }
    }
    component = shallow(<FizzBuzzHOC formValues={props.formValues}/>);
  });

  it("FizzBuzzHOC renders properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it("the converter function should handle the case where one input is zero", () => {
    let fizz = 1, buzz = 1, listLength = 0;
    const result = generateFBResult(fizz, buzz, listLength);
    expect(result).toMatchObject([])
  })

  it("the converter function should handle the case where one input is negative", () => {
    let fizz = 1, buzz = -1, listLength = 0;
    const result = generateFBResult(fizz, buzz, listLength);
    expect(result).toMatchObject([])
  })

  it("the converter function should return proper array", () => {
    let fizz = 1, buzz = 1, listLength = 3;
    const result = generateFBResult(fizz, buzz, listLength);
    expect(result).toMatchObject([
      'FizzBuzz',
      'FizzBuzz',
      'FizzBuzz',
    ])
  })

  it("the converter function should return proper array", () => {
    let fizz = 3, buzz = 5, listLength = 5;
    const result = generateFBResult(fizz, buzz, listLength);
    expect(result).toMatchObject([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
    ])
  })
})