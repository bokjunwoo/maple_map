import { SUMMON_RATE_PER_MINUTE } from '../constants/constants';
import {
  HandleValueChangeParams,
  HandleValueInputChangeParams,
} from './Tutils';

export const handleValueChange = ({
  inputValue,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleValueChangeParams): void => {
  if (currentValue !== Number(inputValue)) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + Number(inputValue)
    );
    setValue(inputValue.toString());
  }
};

export const handleInputValueChange = ({
  inputValue,
  currentValue,
  setExpIncrease,
  setValue,
  regex,
  maxAllowedValue,
}: HandleValueInputChangeParams) => {
  if (regex.test(inputValue)) {
    let updatedValue = inputValue;

    if (Number(updatedValue) > maxAllowedValue) {
      updatedValue = maxAllowedValue.toString();
    }

    handleValueChange({
      inputValue: updatedValue,
      currentValue: Number(currentValue),
      setExpIncrease,
      setValue,
    });
  }
};

export const formatNumber = (number: number, unit: '메소' | '경험치') => {
  const units = [' ', '만', '억', '조', '경'];
  let result = '';
  let unitIndex = 0;

  while (number > 0) {
    const remainder = number % 10000;
    const chunk = remainder > 0 ? remainder + units[unitIndex] + ' ' : '';
    result = chunk + result;
    number = Math.floor(number / 10000);
    unitIndex++;
  }

  return result.trim() + ' ' + unit;
};

export const calculateReward = (
  value: number | number[],
  numberOfMonsters: number | number[],
  time: number
) => {
  let totalReward = 0;

  if (typeof numberOfMonsters === 'number' && typeof value === 'number') {
    totalReward = numberOfMonsters * value * SUMMON_RATE_PER_MINUTE * time;
  }

  if (Array.isArray(value) && Array.isArray(numberOfMonsters)) {
    totalReward = numberOfMonsters.reduce((total, numMonsters, index) => {
      const monstersValue =
        numMonsters * value[index] * SUMMON_RATE_PER_MINUTE * time;
      return total + monstersValue;
    }, 0);
  }

  return totalReward;
};

export const calculateNumberOfMonsters = (
  numberOfMonsters: number | number[],
  time: number
) => {
  let totalMonsters = 0;

  if (typeof numberOfMonsters === 'number') {
    totalMonsters = numberOfMonsters * SUMMON_RATE_PER_MINUTE * time;
  }

  if (Array.isArray(numberOfMonsters)) {
    totalMonsters = numberOfMonsters.reduce((total, numMonsters) => {
      const monstersValue = numMonsters * SUMMON_RATE_PER_MINUTE * time;
      return total + monstersValue;
    }, 0);
  }

  return totalMonsters;
};

export const arrayToString = (input: number | number[] | string | string[]) => {
  return Array.isArray(input) ? input.join(', ') : input;
};

export const sumArrayOrNumber = (input: number | number[]) => {
  return Array.isArray(input)
    ? input.reduce((total, num) => total + num, 0)
    : input;
};
