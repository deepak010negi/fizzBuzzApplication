export interface FormValues {
  fizz: null | number;
  buzz: null | number;
  listLength: null | number;
}

export interface FizzBuzzResultProps {
  data?: Array<string>;
  formValues: FormValues,
  renderRow: any;
}