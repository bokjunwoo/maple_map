import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type BoostRingType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const BoostRing = ({ value, handleChange }: BoostRingType) => {
  return (
    <>
      <InputLabel id="exp-boost-ring">경험치 부스트 링</InputLabel>
      <Select
        labelId="exp-boost-ring"
        id="exp-boost-ring"
        value={value}
        onChange={handleChange}
        label="경험치 부스트 링"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>착용 (15%)</MenuItem>
      </Select>
    </>
  );
};

export default BoostRing;
