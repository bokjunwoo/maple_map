import { Box, Tooltip } from '@mui/material';

type ExpTooltipTpye = {
  children: React.ReactElement;
  Component: React.ComponentType;
};

const ExpTooltip = ({ children, Component }: ExpTooltipTpye) => {
  return (
    <Tooltip title={<Component />} arrow>
      <Box sx={{ display: 'inline-block' }}>{children}</Box>
    </Tooltip>
  );
};

export default ExpTooltip;
