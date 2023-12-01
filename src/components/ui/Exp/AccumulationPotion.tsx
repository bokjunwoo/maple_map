import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';

type AccumulationPotionType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const AccumulationPotion = ({
  value,
  handleChange,
}: AccumulationPotionType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="accumulation-potion">경험 축적의 비약</InputLabel>
      <Select
        labelId="accumulation-potion"
        id="accumulation-potion"
        value={value}
        onChange={handleChange}
        label="경험 축적의 비약"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={10}>10% (경축비)</MenuItem>
        <MenuItem value={20}>20% (고농축 경축비)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AccumulationPotion;
