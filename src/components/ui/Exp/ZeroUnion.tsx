import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';

type ZeroUnionType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ZeroUnion = ({ value, handleChange }: ZeroUnionType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="zero-union">제로 유니온 공격대원</InputLabel>
      <Select
        labelId="zero-union"
        id="zero-union"
        value={value}
        onChange={handleChange}
        label="제로 유니온 공격대원"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={4}>B (4%)</MenuItem>
        <MenuItem value={6}>A (6%)</MenuItem>
        <MenuItem value={8}>S (8%)</MenuItem>
        <MenuItem value={10}>SS (10%)</MenuItem>
        <MenuItem value={12}>SSS (12%)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ZeroUnion;
