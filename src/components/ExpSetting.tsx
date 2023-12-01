import { Box, SelectChangeEvent } from '@mui/material';
import ExpCoupon from './ui/Exp/ExpCoupon';
import { useState } from 'react';
import MvpCoupon from './ui/Exp/MvpCoupon';
import AccumulationPotion from './ui/Exp/AccumulationPotion';

const ExpSetting = () => {
  const [expCouponValue, setExpCouponValue] = useState('');
  const [mvpCouponValue, setMvpCouponValue] = useState('');
  const [accumulationPotion, setAccumulationPotionValue] = useState('');

  const handleExpCouponValueChange = (event: SelectChangeEvent) => {
    setExpCouponValue(event.target.value);
  };
  const handleMvpCouponValueChange = (event: SelectChangeEvent) => {
    setMvpCouponValue(event.target.value);
  };
  const handleAccumulationPotionValueChange = (event: SelectChangeEvent) => {
    setAccumulationPotionValue(event.target.value);
  };

  return (
    <Box>
      <ExpCoupon
        value={expCouponValue}
        handleChange={handleExpCouponValueChange}
      />
      <MvpCoupon
        value={mvpCouponValue}
        handleChange={handleMvpCouponValueChange}
      />
      <AccumulationPotion
        value={accumulationPotion}
        handleChange={handleAccumulationPotionValueChange}
      />
    </Box>
  );
};

export default ExpSetting;
