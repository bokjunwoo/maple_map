import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ExtremeGoldPotionType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExtremeGoldPotion = ({ value, handleChange }: ExtremeGoldPotionType) => {
  return (
    <>
      <InputLabel id="extreme-gold-potion">익스트림 골드(몬파)</InputLabel>
      <Select
        labelId="extreme-gold-potion"
        id="extreme-gold-potion"
        value={value}
        onChange={handleChange}
        label="익스트림 골드(몬파)"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>사용 (10%)</MenuItem>
      </Select>
    </>
  );
};

export default ExtremeGoldPotion;
