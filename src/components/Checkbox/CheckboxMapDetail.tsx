import { Avatar, Box, Chip } from '@mui/material';
import { symbolsColor } from '../../data/colorDatas';

type CheckboxMapDetailType = {
  name: string;
  isSelected: boolean;
  onToggle: (name: string) => void;
};

const CheckboxMapDetail = ({
  name,
  isSelected,
  onToggle,
}: CheckboxMapDetailType) => {
  const handleClick = () => {
    onToggle(name);
  };

  const backgroundColor = symbolsColor[name].bgColor;

  return (
    <Box onClick={handleClick}>
      <Chip
        sx={{
          cursor: 'pointer',
          boxSizing: 'border-box',
          border: isSelected ? '1.5px solid blue' : 'none',
          color: isSelected ? 'blue' : 'black',
          bgcolor: { backgroundColor },
          marginRight: 1,
          marginBottom: 1,
          pl: 0.8,
          '& .MuiChip-label': {
            ml: -0.3,
          },
        }}
        avatar={
          <Avatar
            src={`./images/map_icon/${name}.png`}
            variant="rounded"
            sx={{ p: 0.15 }}
          />
        }
        label={name}
        variant={isSelected ? 'outlined' : 'filled'}
      />
    </Box>
  );
};

export default CheckboxMapDetail;
