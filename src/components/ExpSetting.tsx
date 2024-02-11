import { Box, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { handleInputValueChange, handleSelectValueChange } from '../util/utils';
import ExpCoupon from './UI/Exp/ExpCoupon';
import MvpCoupon from './UI/Exp/MvpCoupon';
import AccumulationPotion from './UI/Exp/AccumulationPotion';
import ExtremeGoldPotion from './UI/Exp/ExtremeGoldPotion';
import SpiritPendant from './UI/Exp/SpiritPendant';
import BoostRing from './UI/Exp/BoostRing';
import ElvenBlessing from './UI/Exp/ElvenBlessing';
import KinshipRing from './UI/Exp/KinshipRing';
import ZeroUnion from './UI/Exp/ZeroUnion';
import LoadedDice from './UI/Exp/LoadedDice';
import PremiumPCroom from './UI/Exp/PremiumPCroom';
import HolySymbol from './UI/Exp/HolySymbol';
import HyperStats from './UI/Exp/HyperStats';
import ExpEtc from './UI/Exp/ExpEtc';
import UnionPlacement from './UI/Exp/UnionPlacement';
import ExpSelectSection from './ExpSelectSection';
import ExpInputSection from './ExpInputSection';
import SolJanus from './UI/Exp/SolJanus';
import { REGEX } from '../constants/constants';

type ExpIncreaseType = {
  expIncrease: number;
  setExpIncrease: React.Dispatch<React.SetStateAction<number>>;
};

const ExpSetting = ({ expIncrease, setExpIncrease }: ExpIncreaseType) => {
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
  const [solJanus, setSolJanusValue] = useState('');
  const [hyperStats, setHyperStatsValue] = useState('');
  const [unionPlacement, setUnionPlacementValue] = useState('');
  const [expEtc, setExpEtcValue] = useState('');

  const handleExpCouponValueChange = (
    event: SelectChangeEvent<string>
  ): void => {
    handleSelectValueChange({
      event,
      currentValue: Number(expCouponValue),
      setExpIncrease,
      setValue: setExpCouponValue,
    });
  };

  const handleMvpCouponValueChange = (
    event: SelectChangeEvent<string>
  ): void => {
    handleSelectValueChange({
      event,
      currentValue: Number(mvpCouponValue),
      setExpIncrease,
      setValue: setMvpCouponValue,
    });
  };

  const handleAccumulationPotionValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(accumulationPotion),
      setExpIncrease,
      setValue: setAccumulationPotionValue,
    });
  };

  const handleExtremeGoldPotionValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(extremeGoldPotion),
      setExpIncrease,
      setValue: setExtremeGoldPotionValue,
    });
  };

  const handleSpiritPendantValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(spiritPendant),
      setExpIncrease,
      setValue: setSpiritPendantValue,
    });
  };

  const handleBoostRingValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(boostRing),
      setExpIncrease,
      setValue: setBoostRingValue,
    });
  };

  const handleElvenBlessingValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(elvenBlessing),
      setExpIncrease,
      setValue: setElvenBlessingValue,
    });
  };

  const handleKinshipRingValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(kinshipRing),
      setExpIncrease,
      setValue: setKinshipRingValue,
    });
  };

  const handleZeroUnionValueChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(zeroUnion),
      setExpIncrease,
      setValue: setZeroUnionValue,
    });
  };

  const handleLoadedDiceChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(loadedDice),
      setExpIncrease,
      setValue: setLoadedDiceValue,
    });
  };

  const handlePremiumPCroomChange = (event: SelectChangeEvent) => {
    handleSelectValueChange({
      event,
      currentValue: Number(premiumPCroom),
      setExpIncrease,
      setValue: setPremiumPCroomValue,
    });
  };

  const handleHolySymbolChange = (event: SelectChangeEvent) => {
    setHolySymbolValue(event.target.value);
  };

  const handleSolJanusChange = (event: SelectChangeEvent) => {
    setSolJanusValue(event.target.value);
  };

  const handleHyperStatsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;

    if (REGEX.NUMBER.test(inputValue)) {
      let updatedValue = inputValue;

      if (Number(updatedValue) > 10) {
        updatedValue = '10';
      }

      handleInputValueChange({
        value: updatedValue,
        currentValue: Number(hyperStats),
        setExpIncrease,
        setValue: setHyperStatsValue,
      });
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

    handleInputValueChange({
      event,
      currentValue: Number(unionPlacement),
      setExpIncrease,
      setValue: setUnionPlacementValue,
    });
  };

  const handleExpEtcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (numberAndDotRegex.test(inputValue)) {
      setExpEtcValue(inputValue);
    }

    handleInputValueChange({
      event,
      currentValue: Number(expEtc),
      setExpIncrease,
      setValue: setExpEtcValue,
    });
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

          <ExpInputSection
            name="sol-janus"
            value={solJanus}
            handleChange={handleSolJanusChange}
            Component={SolJanus}
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

        <Box>
          <Typography
            sx={{ mt: 2, mb: 1, fontWeight: 500 }}
            variant="h5"
            component="div"
          >
            총경험치 증가량 {expIncrease}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ExpSetting;
