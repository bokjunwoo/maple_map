import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';

type PremiumPCroomType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const PremiumPCroom = ({ value, handleChange }: PremiumPCroomType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="premium-PC-room">프리미엄 PC방</InputLabel>
      <Select
        labelId="premium-PC-room"
        id="premium-PC-room"
        value={value}
        onChange={handleChange}
        label="프리미엄 PC방"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={30}>적용 (30%)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PremiumPCroom;
