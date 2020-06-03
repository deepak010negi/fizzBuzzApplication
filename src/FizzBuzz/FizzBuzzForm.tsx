import React, { useState, useCallback } from "react";
import { PROVIDE_ALL_VALUES } from "../Constants";
import { FormValues } from "../Types";

interface FormProps {
  initialFormValues: FormValues;
  onFormSubmit: (arg0: FormValues) => void;
}

export const useFizzBuzzForm = (props: FormProps) => {
  const { initialFormValues, onFormSubmit } = props;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [submitError, setSubmitError] = useState("");

  const setFormValue = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLTextAreaElement;
      const { name, value } = target;

      setFormValues({
        ...formValues,
        [name]: +value
      });
    },
    [formValues, setFormValues]
  );

  const handleSubmitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { fizz, buzz, listLength } = formValues;

      let error = !(fizz && buzz && listLength) ? PROVIDE_ALL_VALUES : "";
      setSubmitError(error);
      onFormSubmit(formValues);
    },
    [formValues, setSubmitError, onFormSubmit]
  );

  return {
    setFormValue,
    handleSubmitForm,
    formValues,
    submitError
  };
};

const FizzBuzzForm = (props: FormProps) => {
  const {
    formValues,
    submitError,
    handleSubmitForm,
    setFormValue
  } = useFizzBuzzForm(props);

  return (
    <form onSubmit={handleSubmitForm}>
      <div data-test="input" className="input">
        <div>Fizz Number *:</div>
        <input
          type="number"
          name="fizz"
          min={0}
          onChange={setFormValue}
          value={formValues.fizz}
        />
      </div>
      <div data-test="input" className="input">
        <div>Buzz Number *:</div>
        <input
          type="number"
          name="buzz"
          min={0}
          onChange={setFormValue}
          value={formValues.buzz}
        />
      </div>
      <div data-test="input" className="input">
        <div>List Length Number *:</div>
        <input
          type="number"
          name="listLength"
          min={0}
          onChange={setFormValue}
          value={formValues.listLength}
        />
      </div>
      <p className="note">
        * Please enter values greater than 0 and press submit to see the
        FizzBuzz magic!
      </p>
      <button data-test="submitButton" type="submit" className="submitButton">
        Submit
      </button>
      <div className={submitError ? "errorTextSubmit" : ""}>{submitError}</div>
    </form>
  );
};

export default FizzBuzzForm;
