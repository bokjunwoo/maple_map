import { Input, InputAdornment, InputLabel } from '@mui/material';

type HolySymbolType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HolySymbol = ({ value, handleChange }: HolySymbolType) => {
  return (
    <>
      <InputLabel htmlFor="holy-symbol">홀리심볼</InputLabel>
      <Input
        id="holy-symbol"
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

export default HolySymbol;
