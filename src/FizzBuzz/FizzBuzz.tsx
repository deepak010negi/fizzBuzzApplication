import React, { useState } from "react";
import FizzBuzzForm from "./FizzBuzzForm";
import FizzBuzzResult from "./FizzBuzzResult";
import "../styles.css";
import { FormValues } from "../Types";

function FizzBuzz() {
  const [formValues, setFormValue] = useState({
    // null initially so that user can enter null in the beginning otherwise 0 wont be removed
    fizz: null,
    buzz: null,
    listLength: null,
  });

  return (
    <div data-test="container" className="container">
      <h1 data-test="header">FizzBuzz Application</h1>
      <FizzBuzzForm
        initialFormValues={formValues}
        onFormSubmit={(formValues: FormValues) => setFormValue(formValues)}
      />
      <FizzBuzzResult
        formValues={formValues}
        renderRow={(rowData: string) => <span>{rowData}</span>}
      />
    </div>
  );
}

export default FizzBuzz;
