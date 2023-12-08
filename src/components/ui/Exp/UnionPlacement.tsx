import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

type UnionPlacementType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
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
      />
    </FormControl>
  );
};

export default UnionPlacement;
