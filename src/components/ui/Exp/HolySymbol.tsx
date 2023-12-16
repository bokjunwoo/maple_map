import { Input, InputAdornment, InputLabel } from '@mui/material';

type HolySymbolType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HolySymbol = ({ name, value, handleChange }: HolySymbolType) => {
  return (
    <>
      <InputLabel htmlFor={name}>홀리심볼</InputLabel>
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

export default HolySymbol;
