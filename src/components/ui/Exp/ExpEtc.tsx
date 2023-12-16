import { InputAdornment, Input, InputLabel } from '@mui/material';

type ExpEtcType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ExpEtc = ({ name, value, handleChange }: ExpEtcType) => {
  return (
    <>
      <InputLabel htmlFor={name}>기타 경험치</InputLabel>
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

export default ExpEtc;
