import { Box, FormControl, SelectChangeEvent } from '@mui/material';
import ExpImage from './UI/Exp/ExpImage';

type ExpSelectSectionType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  Component: React.ComponentType<{
    name: string;
    value: string;
    handleChange: (event: SelectChangeEvent<string>) => void;
  }>;
};

const ExpSelectSection = ({
  name,
  value,
  handleChange,
  Component,
}: ExpSelectSectionType) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ExpImage src={name} />
    <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
      <Component name={name} value={value} handleChange={handleChange} />
    </FormControl>
  </Box>
);

export default ExpSelectSection;
