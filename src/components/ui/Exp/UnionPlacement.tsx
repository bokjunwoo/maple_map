import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';

type UnionPlacementType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UnionPlacement = ({ value, handleChange }: UnionPlacementType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 150 }}>
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
    </FormControl>
  );
};

export default UnionPlacement;
