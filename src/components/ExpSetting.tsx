import { Box, SelectChangeEvent } from '@mui/material';
import ExpCoupon from './ui/Exp/ExpCoupon';
import { useState } from 'react';
import MvpCoupon from './ui/Exp/MvpCoupon';
import AccumulationPotion from './ui/Exp/AccumulationPotion';
import ExtremeGoldPotion from './ui/Exp/ExtremeGoldPotion';

const ExpSetting = () => {
  const [expCouponValue, setExpCouponValue] = useState('');
  const [mvpCouponValue, setMvpCouponValue] = useState('');
  const [accumulationPotion, setAccumulationPotionValue] = useState('');
  const [extremeGoldPotion, setExtremeGoldPotionValue] = useState('');

  const handleExpCouponValueChange = (event: SelectChangeEvent) => {
    setExpCouponValue(event.target.value);
  };
  const handleMvpCouponValueChange = (event: SelectChangeEvent) => {
    setMvpCouponValue(event.target.value);
  };
  const handleAccumulationPotionValueChange = (event: SelectChangeEvent) => {
    setAccumulationPotionValue(event.target.value);
  };
  const handleExtremeGoldPotionValueChange = (event: SelectChangeEvent) => {
    setExtremeGoldPotionValue(event.target.value);
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
      <ExtremeGoldPotion
        value={extremeGoldPotion}
        handleChange={handleExtremeGoldPotionValueChange}
      />
    </Box>
  );
};

export default ExpSetting;
