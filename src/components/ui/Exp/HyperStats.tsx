import { Input, InputAdornment, InputLabel } from '@mui/material';

type HyperStatsType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HyperStats = ({ name, value, handleChange }: HyperStatsType) => {
  return (
    <>
      <InputLabel htmlFor={name}>하이퍼스탯</InputLabel>
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

export default HyperStats;
