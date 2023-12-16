import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ElvenBlessingType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ElvenBlessing = ({ name, value, handleChange }: ElvenBlessingType) => {
  return (
    <>
      <InputLabel id={name}>엘프의 축복</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="엘프의 축복"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>1레벨 (10%)</MenuItem>
        <MenuItem value={10}>2레벨 (15%)</MenuItem>
      </Select>
    </>
  );
};

export default ElvenBlessing;
