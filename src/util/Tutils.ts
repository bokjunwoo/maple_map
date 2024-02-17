export type HandleValueChangeParams = {
  inputValue: string;
  currentValue: number;
  setExpRate: React.Dispatch<React.SetStateAction<number>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type HandleValueInputChangeParams = {
  inputValue: string;
  currentValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setExpRate: React.Dispatch<React.SetStateAction<number>>;
  regex: RegExp;
  maxAllowedValue: number;
};

export type LevelComparison = {
  playerLevel: number;
  monsterLevel: number;
};

export interface MonsterOptions {
  numberOfMonsters: number | number[];
  time: number;
}
