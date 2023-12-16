import { Input, InputAdornment, InputLabel } from '@mui/material';

type UnionPlacementType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UnionPlacement = ({ name, value, handleChange }: UnionPlacementType) => {
  return (
    <>
      <InputLabel htmlFor={name}>유니온 배치</InputLabel>
      <Input
        id={name}
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 0.7 }}>
            %
          </InputAdornment>
        }
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default UnionPlacement;
