import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ZeroUnionType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ZeroUnion = ({ name, value, handleChange }: ZeroUnionType) => {
  return (
    <>
      <InputLabel id={name}>제로 유니온 공격대원</InputLabel>
      <Select
        labelId={name}
        id={name}
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
    </>
  );
};

export default ZeroUnion;
