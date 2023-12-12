import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type KinshipRingType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const KinshipRing = ({ value, handleChange }: KinshipRingType) => {
  return (
    <>
      <InputLabel id="kinship-ring">혈맹의 반지</InputLabel>
      <Select
        labelId="kinship-ring"
        id="kinship-ring"
        value={value}
        onChange={handleChange}
        label="혈맹의 반지"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>착용 (10%)</MenuItem>
      </Select>
    </>
  );
};

export default KinshipRing;
