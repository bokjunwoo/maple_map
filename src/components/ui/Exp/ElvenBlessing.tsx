import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ElvenBlessingType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ElvenBlessing = ({ value, handleChange }: ElvenBlessingType) => {
  return (
    <>
      <InputLabel id="elven-blessing">엘프의 축복</InputLabel>
      <Select
        labelId="elven-blessing"
        id="elven-blessing"
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
