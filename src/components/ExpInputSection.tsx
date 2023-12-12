import { Box, FormControl } from '@mui/material';
import ExpImage from './ui/ExpImage';

type ExpInputSectionType = {
  src: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Component: React.ComponentType<{
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }>;
};

const ExpInputSection = ({
  src,
  value,
  handleChange,
  Component,
}: ExpInputSectionType) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ExpImage src={src} />
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 160 }}>
      <Component value={value} handleChange={handleChange} />
    </FormControl>
  </Box>
);

export default ExpInputSection;
