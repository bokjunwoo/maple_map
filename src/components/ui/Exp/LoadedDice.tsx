import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type LoadedDiceType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const LoadedDice = ({ name, value, handleChange }: LoadedDiceType) => {
  return (
    <>
      <InputLabel id={name}>로디드 다이스</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="로디드 다이스"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={30}>6 (30%)</MenuItem>
        <MenuItem value={40}>66 (40%)</MenuItem>
        <MenuItem value={50}>666 (50%)</MenuItem>
      </Select>
    </>
  );
};

export default LoadedDice;
