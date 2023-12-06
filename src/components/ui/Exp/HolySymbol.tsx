import { FormControl, SelectChangeEvent, TextField } from '@mui/material';

type HolySymbolType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const HolySymbol = ({ value, handleChange }: HolySymbolType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <TextField id="holy-symbol" label="홀리심볼" variant="standard" />
    </FormControl>
  );
};

export default HolySymbol;
