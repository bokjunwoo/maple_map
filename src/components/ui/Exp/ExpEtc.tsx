import { FormControl, SelectChangeEvent, TextField } from '@mui/material';

type ExpEtcType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExpEtc = ({ value, handleChange }: ExpEtcType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <TextField id="exp-etc" label="기타 경험치" variant="standard" />
    </FormControl>
  );
};

export default ExpEtc;
