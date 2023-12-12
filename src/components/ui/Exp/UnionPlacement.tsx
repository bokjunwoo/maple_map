import { Input, InputAdornment, InputLabel } from '@mui/material';

type UnionPlacementType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UnionPlacement = ({ value, handleChange }: UnionPlacementType) => {
  return (
    <>
      <InputLabel htmlFor="union-placement">유니온 배치</InputLabel>
      <Input
        id="union-placement"
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
