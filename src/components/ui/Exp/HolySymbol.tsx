import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

type HolySymbolType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const HolySymbol = ({ value, handleChange }: HolySymbolType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 150 }}>
      <InputLabel htmlFor="holy-symbol">홀리심볼</InputLabel>
      <Input
        id="holy-symbol"
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 0.7 }}>
            %
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default HolySymbol;
