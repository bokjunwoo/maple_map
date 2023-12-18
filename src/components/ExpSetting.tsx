import { Box, SelectChangeEvent, Typography } from '@mui/material';
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
    <>
      <Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontWeight: 500 }}
          variant="h5"
          component="div"
        >
          경험치 버프
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ExpSelectSection
            name="exp-coupon"
            value={expCouponValue}
            handleChange={handleExpCouponValueChange}
            Component={ExpCoupon}
          />
          <ExpSelectSection
            name="mvp-coupon"
            value={mvpCouponValue}
            handleChange={handleMvpCouponValueChange}
            Component={MvpCoupon}
          />
          <ExpSelectSection
            name="accumulation-potion"
            value={accumulationPotion}
            handleChange={handleAccumulationPotionValueChange}
            Component={AccumulationPotion}
          />
          <ExpSelectSection
            name="extreme-gold-potion"
            value={extremeGoldPotion}
            handleChange={handleExtremeGoldPotionValueChange}
            Component={ExtremeGoldPotion}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontWeight: 500 }}
          variant="h5"
          component="div"
        >
          착용 아이템
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ExpSelectSection
            name="spirit-pendant"
            value={spiritPendant}
            handleChange={handleSpiritPendantValueChange}
            Component={SpiritPendant}
          />
          <ExpSelectSection
            name="boost-ring"
            value={boostRing}
            handleChange={handleBoostRingValueChange}
            Component={BoostRing}
          />
          <ExpSelectSection
            name="kinship-ring"
            value={kinshipRing}
            handleChange={handleKinshipRingValueChange}
            Component={KinshipRing}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontWeight: 500 }}
          variant="h5"
          component="div"
        >
          링크&유니온&스탯
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ExpSelectSection
            name="elven-blessing"
            value={elvenBlessing}
            handleChange={handleElvenBlessingValueChange}
            Component={ElvenBlessing}
          />
          <ExpSelectSection
            name="zero-union"
            value={zeroUnion}
            handleChange={handleZeroUnionValueChange}
            Component={ZeroUnion}
          />
          <ExpInputSection
            name="union-placement"
            value={unionPlacement}
            handleChange={handleUnionPlacementChange}
            Component={UnionPlacement}
          />
          <ExpInputSection
            name="hyper-stats"
            value={hyperStats}
            handleChange={handleHyperStatsChange}
            Component={HyperStats}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontWeight: 500 }}
          variant="h5"
          component="div"
        >
          스킬 관련
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ExpSelectSection
            name="loaded-dice"
            value={loadedDice}
            handleChange={handleLoadedDiceChange}
            Component={LoadedDice}
          />
          <ExpInputSection
            name="holy-symbol"
            value={holySymbol}
            handleChange={handleHolySymbolChange}
            Component={HolySymbol}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontWeight: 500 }}
          variant="h5"
          component="div"
        >
          기타
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ExpSelectSection
            name="premium-PC-room"
            value={premiumPCroom}
            handleChange={handlePremiumPCroomChange}
            Component={PremiumPCroom}
          />

          <ExpInputSection
            name="exp-etc"
            value={expEtc}
            handleChange={handleExpEtcChange}
            Component={ExpEtc}
          />
        </Box>
      </Box>
    </>
  );
};

export default ExpSetting;
