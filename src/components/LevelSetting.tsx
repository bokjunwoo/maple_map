import { Box, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { useGlobalState } from '../context/GlobalStateProvider';

const LevelSetting = () => {
  const { level, setLevel } = useGlobalState();

  const handleLevelValueCange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    setLevel(targetValue);
  };

  return (
    <Box>
      <Typography
        sx={{ mt: 2, mb: 1, fontWeight: 500 }}
        variant="h5"
        component="div"
      >
        Level
      </Typography>

      <TextField
        sx={{ width: 160 }}
        id="outlined-size-small"
        variant="standard"
        value={level === 0 ? '' : level}
        onChange={handleLevelValueCange}
      />
    </Box>
  );
};

export default LevelSetting;
