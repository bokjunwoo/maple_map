import { Box, Avatar, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type CardAvatarUIType = {
  src: string;
  variant: Variant | 'inherit';
  text: string | number;
  size: number;
};

const CardAvatarUI = ({ src, variant, text, size }: CardAvatarUIType) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <Avatar
      src={src}
      variant="rounded"
      sx={{ p: 0.15, width: size, height: size }}
    />
    <Typography variant={variant} marginLeft={0.5}>
      {text}
    </Typography>
  </Box>
);

export default CardAvatarUI;
