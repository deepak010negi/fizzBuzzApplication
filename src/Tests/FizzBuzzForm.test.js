import React from "react";
import { shallow, mount } from "enzyme";

import FizzBuzzForm, { useFizzBuzzForm } from "../FizzBuzz/FizzBuzzForm";
import { PROVIDE_ALL_VALUES } from "../Constants";

it("form renders properly", () => {
  const props = {
    initialFormValues: {
      fizz: 3,
      buzz: 5,
      listLength: 15
    },
    onFormSubmit: jest.fn()
  };
  const component = mount(<FizzBuzzForm {...props} />);

  expect(component.html()).toMatchSnapshot();
});

describe("testing useFizzBuzzForm", () => {
  const onFormSubmit = jest.fn();
  const log = jest.fn();
  const props = {
    initialFormValues: {
      fizz: 3,
      buzz: 5,
      listLength: 15
    },
    onFormSubmit
  };

  const Component = props => {
    const hookProps = useFizzBuzzForm(props);
    log(hookProps);

    return null;
  };

  const getHookProps = props => {
    const wrapper = shallow(<Component {...props} />);

    const hookProps = log.mock.calls[0][0];

    const update = () => {
      wrapper.update();

      return log.mock.calls[log.mock.calls.length - 1][0];
    };

    return { hookProps, update };
  };

  beforeEach(() => {
    log.mockClear();
    onFormSubmit.mockClear();
  });

  it("should return correct shape", () => {
    expect(getHookProps(props).hookProps).toMatchSnapshot();
  });

  it("setFormValue should update the formValues object with the name and value from the event object", () => {
    const formValues = {
      fizz: 3,
      buzz: 5,
      listLength: 15
    };

    const { hookProps, update } = getHookProps({
      initialFormValues: formValues,
      onFormSubmit
    });

    expect(hookProps.formValues).toMatchObject(formValues);

    const mockEventObject = {
      target: {
        name: "fizz",
        value: 10
      }
    };
    hookProps.setFormValue(mockEventObject);
    const newHookProps = update();

    expect(newHookProps.formValues.fizz).toBe(10);
  });

  it("handleSubmitForm should call preventDefault on the submit event", () => {
    const preventDefault = jest.fn();
    const mockEventObject = {
      preventDefault
    };

    const { hookProps } = getHookProps(props);

    hookProps.handleSubmitForm(mockEventObject);

    expect(preventDefault).toHaveBeenCalled();
  });

  it("handleSubmitForm should set error if any of the values are falsy", () => {
    const formValues = {
      fizz: 0,
      buzz: 5,
      listLength: 15
    };

    const { hookProps, update } = getHookProps({
      initialFormValues: formValues,
      onFormSubmit
    });

    hookProps.handleSubmitForm({ preventDefault: () => {} });

    expect(update().submitError).toBe(PROVIDE_ALL_VALUES);

    const { hookProps: newHookProps } = getHookProps({
      initialFormValues: {
        fizz: 3,
        buzz: 5,
        listLength: 15
      },
      onFormSubmit
    });

    expect(newHookProps.submitError).toBe("");
  });

  it("handleSubmitForm should call onFormSubmit with the formValues object", () => {
    const formValues = {
      fizz: 10,
      buzz: 5,
      listLength: 15
    };

    const { hookProps } = getHookProps({
      initialFormValues: formValues,
      onFormSubmit
    });

    hookProps.handleSubmitForm({ preventDefault: () => {} });

    expect(onFormSubmit).toHaveBeenCalledWith(formValues);
  });
});

