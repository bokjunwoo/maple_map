import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type PremiumPCroomType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const PremiumPCroom = ({ name, value, handleChange }: PremiumPCroomType) => {
  return (
    <>
      <InputLabel id={name}>프리미엄 PC방</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="프리미엄 PC방"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={30}>적용 (30%)</MenuItem>
      </Select>
    </>
  );
};

export default PremiumPCroom;
