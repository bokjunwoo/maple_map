import { Box } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { formatNumber } from '../../../util/utils';

type CardValueWithLabelUIType = {
  label: string;
  value: number;
  unit: '메소' | '경험치';
};

const CardValueWithLabelUI = ({
  label,
  value,
  unit,
}: CardValueWithLabelUIType) => (
  <Box sx={{ display: 'flex', mt: 1, mb: 1 }}>
    <Box sx={{ flexDirection: 'row' }}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="subtitle1" sx={{ visibility: 'hidden' }}>
        {label}
      </Typography>
    </Box>

    <Box sx={{ flexDirection: 'row', ml: 0.5 }}>
      <Typography variant="subtitle1">{value.toLocaleString()}</Typography>
      <Typography variant="subtitle1">
        약 {formatNumber(value, unit)}
      </Typography>
    </Box>
  </Box>
);

export default CardValueWithLabelUI;
