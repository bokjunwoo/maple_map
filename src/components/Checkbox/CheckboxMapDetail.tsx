import { Avatar, Box, Chip } from '@mui/material';
import { useState } from 'react';

type CheckboxMapDetailType = {
  name: string;
};

const CheckboxMapDetail = ({ name }: CheckboxMapDetailType) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev); // 클릭 여부를 토글
  };

  return (
    <Box onClick={handleClick}>
      <Chip
        sx={{
          cursor: 'pointer',
          boxSizing: 'border-box',
          border: isClicked ? '1.5px solid blue' : 'none',
          color: isClicked ? 'blue' : 'black',
          bgcolor: 'skyblue',
        }}
        avatar={<Avatar>M</Avatar>}
        label={name}
        variant={isClicked ? 'outlined' : 'filled'}
      />
    </Box>
  );
};

export default CheckboxMapDetail;
