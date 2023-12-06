import { FormControl, SelectChangeEvent, TextField } from '@mui/material';

type HyperStatsType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const HyperStats = ({ value, handleChange }: HyperStatsType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <TextField id="hyper-stats" label="하이퍼스탯" variant="standard" />
    </FormControl>
  );
};

export default HyperStats;
