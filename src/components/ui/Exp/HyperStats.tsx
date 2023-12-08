import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

type HyperStatsType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
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
      />
    </FormControl>
  );
};

export default HyperStats;
