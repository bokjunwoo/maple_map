import { Box, Typography } from '@mui/material';

const FooterUI = () => {
  return (
    <Box
      sx={{
        color: '#424242',
        padding: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        &copy; 2023 메이플 사냥터 효율. All rights reserved.
      </Typography>
      <Typography variant="body2">
        메이플 사냥터 효율 is not associated with NEXON Korea.
      </Typography>
      <Typography variant="body2">문의 / 오류제보 :</Typography>
    </Box>
  );
};

export default FooterUI;
