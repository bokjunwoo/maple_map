import { Box, Typography, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type CardTextFieldWithLabelUIType = {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxValue: number;
};

const CardTextFieldWithLabelUI = ({
  label,
  value,
  onChange,
  maxValue,
}: CardTextFieldWithLabelUIType) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
    <Typography variant="subtitle1" marginLeft={0.5}>
      {label}
    </Typography>

    <Box sx={{ display: 'flex', alignItems: 'center' }} marginLeft={1}>
      <TextField
        sx={{ width: 40 }}
        id="outlined-size-small"
        size="small"
        defaultValue={0}
        value={value === 0 ? '' : value}
        onChange={onChange}
        inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
      />

      <Typography variant="subtitle1" marginLeft={0.5}>
        / {maxValue}
      </Typography>
    </Box>
  </Box>
);

export default CardTextFieldWithLabelUI;
