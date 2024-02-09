import { summonRatePerMinute, halfHour } from '../constants/constants';
import {
  HandleCouponValueInputChangeParams,
  HandleCouponValueSelectChangeParams,
} from './Tutils';

export const numberAndDotRegex = /^\d*(\.\d{0,2})?$/;

export const numberRegex = /^[0-9]*$/;

export const handleSelectValueChange = ({
  event,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleCouponValueSelectChangeParams): void => {
  const updatedValue = Number(event.target.value);

  if (currentValue !== updatedValue) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + updatedValue
    );
  }

  setValue(event.target.value);
};

export const handleInputValueChange = ({
  event,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleCouponValueInputChangeParams): void => {
  const updatedValue = Number(event.target.value);

  if (currentValue !== updatedValue) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + updatedValue
    );
  }

  setValue(event.target.value);
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
  numberOfMonsters: number | number[]
) => {
  let totalReward = 0;

  if (typeof numberOfMonsters === 'number' && typeof value === 'number') {
    totalReward = numberOfMonsters * value * summonRatePerMinute * halfHour;
  }

  if (Array.isArray(value) && Array.isArray(numberOfMonsters)) {
    totalReward = numberOfMonsters.reduce((total, numMonsters, index) => {
      const monstersValue =
        numMonsters * value[index] * summonRatePerMinute * halfHour;
      return total + monstersValue;
    }, 0);
  }

  return totalReward.toLocaleString();
};

export const calculateNumberOfMonsters = (
  numberOfMonsters: number | number[]
) => {
  let totalMonsters = 0;

  if (typeof numberOfMonsters === 'number') {
    totalMonsters = numberOfMonsters * summonRatePerMinute * halfHour;
  }

  if (Array.isArray(numberOfMonsters)) {
    totalMonsters = numberOfMonsters.reduce((total, numMonsters) => {
      const monstersValue = numMonsters * summonRatePerMinute * halfHour;
      return total + monstersValue;
    }, 0);
  }

  return totalMonsters;
};

export const arrayToString = (input: number | number[] | string | string[]) => {
  return Array.isArray(input) ? input.join(', ') : input;
};
