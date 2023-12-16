import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type SpiritPendantType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const SpiritPendant = ({ name, value, handleChange }: SpiritPendantType) => {
  return (
    <>
      <InputLabel id={name}>정령의 펜던트</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="정령의 펜던트"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>10%</MenuItem>
        <MenuItem value={20}>20%</MenuItem>
        <MenuItem value={30}>30%</MenuItem>
      </Select>
    </>
  );
};

export default SpiritPendant;
