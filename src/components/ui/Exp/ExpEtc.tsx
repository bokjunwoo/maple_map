import {
  FormControl,
  InputAdornment,
  SelectChangeEvent,
  Input,
  InputLabel,
} from '@mui/material';

type ExpEtcType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExpEtc = ({ value, handleChange }: ExpEtcType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 150 }}>
      <InputLabel htmlFor="exp-etc">기타 경험치</InputLabel>
      <Input
        id="exp-etc"
        endAdornment={
          <InputAdornment position="end" sx={{ mr: 0.7 }}>
            %
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default ExpEtc;
