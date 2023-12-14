import { Box, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { numberAndDotRegex } from '../util/util';
import ExpCoupon from './ui/Exp/ExpCoupon';
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
import HolySymbol from './ui/Exp/HolySymbol';
import HyperStats from './ui/Exp/HyperStats';
import ExpEtc from './ui/Exp/ExpEtc';
import UnionPlacement from './ui/Exp/UnionPlacement';
import ExpSelectSection from './ExpSelectSection';
import ExpInputSection from './ExpInputSection';

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
  const [holySymbol, setHolySymbolValue] = useState('');
  const [hyperStats, setHyperStatsValue] = useState('');
  const [unionPlacement, setUnionPlacementValue] = useState('');
  const [expEtc, setExpEtcValue] = useState('');

  const handleExpCouponValueChange = (event: SelectChangeEvent<string>) => {
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
  const handleHolySymbolChange = (event: SelectChangeEvent) => {
    setHolySymbolValue(event.target.value);
  };
  const handleHyperStatsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;

    if (numberAndDotRegex.test(inputValue)) {
      setHyperStatsValue(inputValue);
    }

    if (Number(inputValue) > 10) {
      setHyperStatsValue('10');
    }
  };
  const handleUnionPlacementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;

    if (numberAndDotRegex.test(inputValue)) {
      setUnionPlacementValue(inputValue);
    }

    if (Number(inputValue) > 10) {
      setUnionPlacementValue('10');
    }
  };
  const handleExpEtcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (numberAndDotRegex.test(inputValue)) {
      setExpEtcValue(inputValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <ExpSelectSection
        name=""
        value={expCouponValue}
        handleChange={handleExpCouponValueChange}
        Component={ExpCoupon}
      />
      <ExpSelectSection
        name=""
        value={mvpCouponValue}
        handleChange={handleMvpCouponValueChange}
        Component={MvpCoupon}
      />
      <ExpSelectSection
        name=""
        value={accumulationPotion}
        handleChange={handleAccumulationPotionValueChange}
        Component={AccumulationPotion}
      />
      <ExpSelectSection
        name=""
        value={extremeGoldPotion}
        handleChange={handleExtremeGoldPotionValueChange}
        Component={ExtremeGoldPotion}
      />
      <ExpSelectSection
        name=""
        value={spiritPendant}
        handleChange={handleSpiritPendantValueChange}
        Component={SpiritPendant}
      />
      <ExpSelectSection
        name=""
        value={boostRing}
        handleChange={handleBoostRingValueChange}
        Component={BoostRing}
      />
      <ExpSelectSection
        name=""
        value={elvenBlessing}
        handleChange={handleElvenBlessingValueChange}
        Component={ElvenBlessing}
      />
      <ExpSelectSection
        name=""
        value={kinshipRing}
        handleChange={handleKinshipRingValueChange}
        Component={KinshipRing}
      />
      <ExpSelectSection
        name=""
        value={zeroUnion}
        handleChange={handleZeroUnionValueChange}
        Component={ZeroUnion}
      />
      <ExpSelectSection
        name=""
        value={loadedDice}
        handleChange={handleLoadedDiceChange}
        Component={LoadedDice}
      />
      <ExpSelectSection
        name=""
        value={premiumPCroom}
        handleChange={handlePremiumPCroomChange}
        Component={PremiumPCroom}
      />
      <ExpInputSection
        name=""
        value={holySymbol}
        handleChange={handleHolySymbolChange}
        Component={HolySymbol}
      />
      <ExpInputSection
        name=""
        value={hyperStats}
        handleChange={handleHyperStatsChange}
        Component={HyperStats}
      />
      <ExpInputSection
        name=""
        value={unionPlacement}
        handleChange={handleUnionPlacementChange}
        Component={UnionPlacement}
      />
      <ExpInputSection
        name=""
        value={expEtc}
        handleChange={handleExpEtcChange}
        Component={ExpEtc}
      />
    </Box>
  );
};

export default ExpSetting;
