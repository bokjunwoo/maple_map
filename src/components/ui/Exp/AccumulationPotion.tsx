import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type AccumulationPotionType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const AccumulationPotion = ({
  name,
  value,
  handleChange,
}: AccumulationPotionType) => {
  return (
    <>
      <InputLabel id={name}>경험 축적의 비약</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="경험 축적의 비약"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>경축비 (10%)</MenuItem>
        <MenuItem value={20}>고농축 경축비 (20%)</MenuItem>
      </Select>
    </>
  );
};

export default AccumulationPotion;
