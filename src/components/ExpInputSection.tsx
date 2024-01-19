import { Box, FormControl } from '@mui/material';
import ExpImage from './UI/Exp/ExpImage';
import ExpTooltip from './Tooltip/ExpTooltip';
import SolJanusTooltip from './Tooltip/SolJanusTooltip';
import HolySymbolTooltip from './Tooltip/HolySymbolTooltip';

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

const getExpTooltip = (name: string, Component: React.ComponentType) => (
  <ExpTooltip Component={Component}>
    <ExpImage src={name} />
  </ExpTooltip>
);

const ExpInputSection = ({
  name,
  value,
  handleChange,
  Component,
}: ExpInputSectionType) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {name === 'sol-janus' && getExpTooltip(name, SolJanusTooltip)}
    {name === 'holy-symbol' && getExpTooltip(name, HolySymbolTooltip)}
    {name !== 'sol-janus' && name !== 'holy-symbol' && <ExpImage src={name} />}

    <FormControl variant="standard" sx={{ m: 1, maxWidth: 160 }}>
      <Component name={name} value={value} handleChange={handleChange} />
    </FormControl>
  </Box>
);

export default ExpInputSection;
