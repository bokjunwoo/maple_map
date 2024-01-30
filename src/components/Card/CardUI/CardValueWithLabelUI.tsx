import { Box } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';

type CardValueWithLabelUIType = {
  label: string;
  value: number;
};

const CardValueWithLabelUI = ({ label, value }: CardValueWithLabelUIType) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
    <Typography variant="subtitle1" marginLeft={0.5}>
      {label} {value}
    </Typography>
  </Box>
);

export default CardValueWithLabelUI;
