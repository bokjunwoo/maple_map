import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';

type HolySymbolType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HolySymbol = ({ value, handleChange }: HolySymbolType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 150 }}>
      <InputLabel htmlFor="holy-symbol" error>
        홀리심볼
      </InputLabel>
      <Input
        id="holy-symbol"
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 0.7 }}>
            %
          </InputAdornment>
        }
        value={value}
        onChange={handleChange}
        error={true}
      />
    </FormControl>
  );
};

export default HolySymbol;
