import { Input, InputAdornment, InputLabel } from '@mui/material';

type SolJanusType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SolJanus = ({ name, value, handleChange }: SolJanusType) => {
  return (
    <>
      <InputLabel htmlFor={name}>솔 야누스</InputLabel>
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

export default SolJanus;
