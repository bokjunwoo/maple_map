import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type BoostRingType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const BoostRing = ({ name, value, handleChange }: BoostRingType) => {
  return (
    <>
      <InputLabel id={name}>경험치 부스트 링</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="경험치 부스트 링"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={15}>착용 (15%)</MenuItem>
      </Select>
    </>
  );
};

export default BoostRing;
