import { Box, SelectChangeEvent } from '@mui/material';
import ExpCoupon from './ui/Exp/ExpCoupon';
import { useState } from 'react';

const ExpSetting = () => {
  const [expCouponValue, setExpCouponValue] = useState('');

  const handleExpCouponValueChange = (event: SelectChangeEvent) => {
    setExpCouponValue(event.target.value);
  };

  return (
    <Box>
      <ExpCoupon
        value={expCouponValue}
        handleChange={handleExpCouponValueChange}
      />
    </Box>
  );
};

export default ExpSetting;
