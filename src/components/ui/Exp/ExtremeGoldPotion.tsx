import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ExtremeGoldPotionType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExtremeGoldPotion = ({
  name,
  value,
  handleChange,
}: ExtremeGoldPotionType) => {
  return (
    <>
      <InputLabel id={name}>익스트림 골드(몬파)</InputLabel>
      <Select
        labelId={name}
        id={name}
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
