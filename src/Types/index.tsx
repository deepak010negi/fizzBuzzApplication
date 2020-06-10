export type FormValues = {
  fizz: null | number;
  buzz: null | number;
  listLength: null | number;
}

export type FizzBuzzResultProps = {
  data?: Array<string>;
  formValues: FormValues,
  renderRow: any;
}