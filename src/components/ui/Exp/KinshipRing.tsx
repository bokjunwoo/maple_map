import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type KinshipRingType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const KinshipRing = ({ name, value, handleChange }: KinshipRingType) => {
  return (
    <>
      <InputLabel id={name}>혈맹의 반지</InputLabel>
      <Select
        labelId={name}
        id={name}
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
