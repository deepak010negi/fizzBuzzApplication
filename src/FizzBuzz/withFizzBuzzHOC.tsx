import React from "react";
import { FizzBuzzResultProps } from "../Types";

export const generateFBResult = (
  fizz: null | number,
  buzz: null | number,
  listLength: null | number,
): Array<string> => {
  if (+fizz <= 0 || +buzz <= 0 || +listLength <= 0) {
    return [];
  }
  return Array(listLength)
    .fill(null, 0, listLength)
    .map((_: any, index: number) => {
      const i = index + 1; // counting should start from 1
      let proccessedValue = `${i}`;

      if (i % fizz === 0 && i % buzz === 0) {
        proccessedValue = "FizzBuzz";
      } else if (i % fizz === 0) {
        proccessedValue = "Fizz";
      } else if (i % buzz === 0) {
        proccessedValue = "Buzz";
      }

      return proccessedValue;
    });
};

const withFizzBuzzHOC = (WrappedComponent: any) => {
  const HOC = (props: FizzBuzzResultProps) => {
    const { fizz, buzz, listLength } = props.formValues;
    const fbResult = generateFBResult(fizz, buzz, listLength);
    return <WrappedComponent {...props} data={fbResult} />;
  };

  return HOC;
};

export default withFizzBuzzHOC;
