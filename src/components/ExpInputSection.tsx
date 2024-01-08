import { Box, FormControl } from '@mui/material';
import ExpImage from './UI/Exp/ExpImage';

type ExpInputSectionType = {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Component: React.ComponentType<{
    name: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }>;
};

const ExpInputSection = ({
  name,
  value,
  handleChange,
  Component,
}: ExpInputSectionType) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ExpImage src={name} />
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 160 }}>
      <Component name={name} value={value} handleChange={handleChange} />
    </FormControl>
  </Box>
);

export default ExpInputSection;
