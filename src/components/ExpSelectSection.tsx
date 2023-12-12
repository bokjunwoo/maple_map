import { Box, FormControl, SelectChangeEvent } from '@mui/material';
import ExpImage from './ui/ExpImage';

type ExpSelectSectionType = {
  src: string;
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  Component: React.ComponentType<{
    value: string;
    handleChange: (event: SelectChangeEvent<string>) => void;
  }>;
};

const ExpSelectSection = ({
  src,
  value,
  handleChange,
  Component,
}: ExpSelectSectionType) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ExpImage src={src} />
    <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
      <Component value={value} handleChange={handleChange} />
    </FormControl>
  </Box>
);

export default ExpSelectSection;
