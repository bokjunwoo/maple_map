import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';

type HyperStatsType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HyperStats = ({ value, handleChange }: HyperStatsType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 150 }}>
      <InputLabel htmlFor="hyper-stats">하이퍼스탯</InputLabel>
      <Input
        id="hyper-stats"
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 0.7 }}>
            %
          </InputAdornment>
        }
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default HyperStats;
