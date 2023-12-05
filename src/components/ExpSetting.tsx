import { Box, SelectChangeEvent } from '@mui/material';
import ExpCoupon from './ui/Exp/ExpCoupon';
import { useState } from 'react';
import MvpCoupon from './ui/Exp/MvpCoupon';
import AccumulationPotion from './ui/Exp/AccumulationPotion';
import ExtremeGoldPotion from './ui/Exp/ExtremeGoldPotion';
import SpiritPendant from './ui/Exp/SpiritPendant';
import BoostRing from './ui/Exp/BoostRing';
import ElvenBlessing from './ui/Exp/ElvenBlessing';
import KinshipRing from './ui/Exp/KinshipRing';
import ZeroUnion from './ui/Exp/ZeroUnion';
import LoadedDice from './ui/Exp/LoadedDice';
import PremiumPCroom from './ui/Exp/PremiumPCroom';

const ExpSetting = () => {
  const [expCouponValue, setExpCouponValue] = useState('');
  const [mvpCouponValue, setMvpCouponValue] = useState('');
  const [accumulationPotion, setAccumulationPotionValue] = useState('');
  const [extremeGoldPotion, setExtremeGoldPotionValue] = useState('');
  const [spiritPendant, setSpiritPendantValue] = useState('');
  const [boostRing, setBoostRingValue] = useState('');
  const [elvenBlessing, setElvenBlessingValue] = useState('');
  const [kinshipRing, setKinshipRingValue] = useState('');
  const [zeroUnion, setZeroUnionValue] = useState('');
  const [loadedDice, setLoadedDiceValue] = useState('');
  const [premiumPCroom, setPremiumPCroomValue] = useState('');

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
  const handleSpiritPendantValueChange = (event: SelectChangeEvent) => {
    setSpiritPendantValue(event.target.value);
  };
  const handleBoostRingValueChange = (event: SelectChangeEvent) => {
    setBoostRingValue(event.target.value);
  };
  const handleElvenBlessingValueChange = (event: SelectChangeEvent) => {
    setElvenBlessingValue(event.target.value);
  };
  const handleKinshipRingValueChange = (event: SelectChangeEvent) => {
    setKinshipRingValue(event.target.value);
  };
  const handleZeroUnionValueChange = (event: SelectChangeEvent) => {
    setZeroUnionValue(event.target.value);
  };
  const handleLoadedDiceChange = (event: SelectChangeEvent) => {
    setLoadedDiceValue(event.target.value);
  };
  const handlePremiumPCroomChange = (event: SelectChangeEvent) => {
    setPremiumPCroomValue(event.target.value);
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
      <SpiritPendant
        value={spiritPendant}
        handleChange={handleSpiritPendantValueChange}
      />
      <BoostRing value={boostRing} handleChange={handleBoostRingValueChange} />

      <ElvenBlessing
        value={elvenBlessing}
        handleChange={handleElvenBlessingValueChange}
      />

      <KinshipRing
        value={kinshipRing}
        handleChange={handleKinshipRingValueChange}
      />

      <ZeroUnion value={zeroUnion} handleChange={handleZeroUnionValueChange} />

      <LoadedDice value={loadedDice} handleChange={handleLoadedDiceChange} />

      <PremiumPCroom
        value={premiumPCroom}
        handleChange={handlePremiumPCroomChange}
      />
    </Box>
  );
};

export default ExpSetting;
