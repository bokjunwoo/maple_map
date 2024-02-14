export type HandleValueChangeParams = {
  inputValue: string;
  currentValue: number;
  setExpIncrease: React.Dispatch<React.SetStateAction<number>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type HandleValueInputChangeParams = {
  inputValue: string;
  currentValue: string;
  setExpIncrease: React.Dispatch<React.SetStateAction<number>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  regex: RegExp;
  maxAllowedValue: number;
};
