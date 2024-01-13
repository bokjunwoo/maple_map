import { Avatar, Box, Chip } from '@mui/material';

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

  return (
    <Box onClick={handleClick}>
      <Chip
        sx={{
          cursor: 'pointer',
          boxSizing: 'border-box',
          border: isSelected ? '1.5px solid blue' : 'none',
          color: isSelected ? 'blue' : 'black',
          bgcolor: 'skyblue',
        }}
        avatar={<Avatar>M</Avatar>}
        label={name}
        variant={isSelected ? 'outlined' : 'filled'}
      />
    </Box>
  );
};

export default CheckboxMapDetail;
