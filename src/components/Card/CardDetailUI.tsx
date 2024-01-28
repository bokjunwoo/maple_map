import { Box, Avatar, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type CardDetailUIType = {
  src: string;
  variant: Variant | 'inherit';
  text: string | number;
};

const CardDetailUI = ({ src, variant, text }: CardDetailUIType) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <Avatar
      src={src}
      variant="rounded"
      sx={{ p: 0.15, width: 24, height: 24 }}
    />
    <Typography variant={variant} marginLeft={0.5}>
      {text}
    </Typography>
  </Box>
);

export default CardDetailUI;
