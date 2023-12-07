import { FormControl, SelectChangeEvent, TextField } from '@mui/material';

type UnionPlacementType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const UnionPlacement = ({ value, handleChange }: UnionPlacementType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <TextField id="union-placement" label="유니온 배치" variant="standard" />
    </FormControl>
  );
};

export default UnionPlacement;
