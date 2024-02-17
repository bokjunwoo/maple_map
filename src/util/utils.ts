import { SUMMON_RATE_PER_MINUTE } from '../constants/constants';
import {
  HandleValueChangeParams,
  HandleValueInputChangeParams,
  LevelComparison,
  MonsterMesoCalculationOptions,
  MonsterOptions,
} from './Tutils';

export const handleValueChange = ({
  inputValue,
  currentValue,
  setExpRate,
  setValue,
}: HandleValueChangeParams): void => {
  if (currentValue !== Number(inputValue)) {
    setExpRate(
      (prevExpIncrease) => prevExpIncrease - currentValue + Number(inputValue)
    );
    setValue(inputValue.toString());
  }
};

export const handleInputValueChange = ({
  inputValue,
  currentValue,
  setValue,
  setExpRate,
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
      setValue,
      setExpRate,
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

export const calculateMonsterMesoReward = ({
  mesoOfMonster,
  numberOfMonsters,
  time,
}: MonsterMesoCalculationOptions): number => {
  let totalReward = 0;

  if (
    typeof numberOfMonsters === 'number' &&
    typeof mesoOfMonster === 'number'
  ) {
    totalReward =
      numberOfMonsters * mesoOfMonster * SUMMON_RATE_PER_MINUTE * time;
  }

  if (Array.isArray(mesoOfMonster) && Array.isArray(numberOfMonsters)) {
    totalReward = numberOfMonsters.reduce((total, numMonsters, index) => {
      const monstersValue =
        numMonsters * mesoOfMonster[index] * SUMMON_RATE_PER_MINUTE * time;
      return total + monstersValue;
    }, 0);
  }

  return totalReward;
};

export const calculateNumberOfMonsters = ({
  numberOfMonsters,
  time,
}: MonsterOptions) => {
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

const calculateSingleScale = ({
  playerLevel,
  monsterLevel,
}: LevelComparison): number => {
  const diff = playerLevel - monsterLevel;
  if (diff >= 40) {
    return 70;
  } else if (diff >= 21) {
    return 71 + (diff - 21);
  } else if (diff >= 20) {
    return 95;
  } else if (diff >= 18) {
    return 96;
  } else if (diff >= 16) {
    return 97;
  } else if (diff >= 14) {
    return 98;
  } else if (diff >= 12) {
    return 99;
  } else if (diff >= 10) {
    return 100;
  } else if (diff >= 5) {
    return 105;
  } else if (diff >= 2) {
    return 110;
  } else if (diff >= 0) {
    return 120;
  } else if (diff >= -2) {
    return 110;
  } else if (diff >= -5) {
    return 105 - (diff + 5) * 4;
  } else if (diff >= -9) {
    return 70 - (diff + 9);
  } else if (diff >= -20) {
    return 10;
  } else if (diff < -20) {
    return 0;
  }
  return 0;
};

const calculateScale = ({
  playerLevel,
  monsterLevel,
}: LevelComparison): number | number[] => {
  if (Array.isArray(monsterLevel)) {
    return monsterLevel.map((monsterLevel) =>
      calculateSingleScale({ playerLevel, monsterLevel })
    );
  } else {
    return calculateSingleScale({ playerLevel, monsterLevel });
  }
};
