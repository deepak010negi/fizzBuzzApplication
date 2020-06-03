import React from "react";
import withFizzBuzzHOC from "./withFizzBuzzHOC";
import "../styles.css";

export const Result = ({ renderRow, data }: {renderRow: (string, number) => JSX.Element, data: Array<string>}) => (
  <div className='displayList' data-test="displayList">
    {data.map((row: string, index: number) => (
      <span key={index} className='listItems'>{renderRow(row, index)}</span>
    ))}
  </div>
);

export default withFizzBuzzHOC(Result);
