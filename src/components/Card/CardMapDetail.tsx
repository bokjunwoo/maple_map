import { Box, CardMedia, CardContent, Card } from '@mui/material';
import CardAvatar from './CardUI/CardAvatarUI';
import { MapType } from '../../data/mapTypes';
import { ChangeEvent, useState } from 'react';
import CardValueWithLabelUI from './CardUI/CardValueWithLabelUI';
import CardTextFieldWithLabelUI from './CardUI/CardTextFieldWithLabelUI';
import {
  arrayToString,
  calculateMonsterExpReward,
  calculateMonsterMesoReward,
  sumArrayOrNumber,
} from '../../util/utils';
import { REGEX, SIX_MINUTES } from '../../constants/constants';
import { useGlobalState } from '../../context/GlobalStateProvider';

type CardMapDetailType = {
  mapInfo: MapType;
};

const CardMapDetail = ({ mapInfo }: CardMapDetailType) => {
  const { level, expRate } = useGlobalState();

  const totalNumberOfMonsters = sumArrayOrNumber(mapInfo.number_of_monster);
  const monsterNameValue = arrayToString(mapInfo.monster);
  const monsterLevelValue = arrayToString(mapInfo.monster_level);
  const monsterMoneyValue = arrayToString(mapInfo.monster_money);
  const monsterExperienceValue = arrayToString(mapInfo.monster_experience);

  const [monsterValue, setMonsterValue] = useState<number>(
    totalNumberOfMonsters
  );
  const [sixMinutesMonsterValue, setSixMinutesMonsterValue] = useState(
    totalNumberOfMonsters * 48
  );

  const handleMonsterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    const maxMonsterValue = totalNumberOfMonsters * 48;

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMonsterValue(targetValue);
      setSixMinutesMonsterValue(targetValue * 48);
    }

    if (targetValue > totalNumberOfMonsters) {
      setMonsterValue(totalNumberOfMonsters);
      setSixMinutesMonsterValue(maxMonsterValue);
    }
  };

  const handleSixMinutesMonsterValue = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = Number(event.target.value);
    const maxMonsterValue = totalNumberOfMonsters * 48;

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMonsterValue(parseFloat((targetValue / 48).toFixed(1)));
      setSixMinutesMonsterValue(targetValue);
    }

    if (targetValue > maxMonsterValue) {
      setMonsterValue(totalNumberOfMonsters);
      setSixMinutesMonsterValue(maxMonsterValue);
      return;
    }
  };

  const expReward = Number(
    calculateMonsterExpReward({
      expOfMonster: mapInfo.monster_experience,
      numberOfMonsters: mapInfo.number_of_monster,
      time: SIX_MINUTES,
      expRate,
      playerLevel: level,
      monsterLevel: mapInfo.monster_level,
    }).toFixed(0)
  );

  const mesoReward = Number(
    calculateMonsterMesoReward({
      mesoOfMonster: mapInfo.monster_money,
      numberOfMonsters: mapInfo.number_of_monster,
      time: SIX_MINUTES,
    })
  );

  return (
    <Card
      sx={{ display: 'flex', border: 'none', boxShadow: 'none', height: 238 }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 460,
          height: 238,
          objectFit: 'fill',
          borderRadius: '4px',
        }}
        image={`/images/map/${mapInfo.map_key}/${mapInfo.map_name}.png`}
        alt="Live from space album cover"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ p: 0, ml: 1, width: 250 }}>
          <CardAvatar
            src={`./images/map_icon/${mapInfo.map_key}.png`}
            variant="h6"
            text={mapInfo.map_name}
            size={35}
          />

          <CardAvatar
            src={`/images/symbol_icon/${mapInfo.map_key}.png`}
            variant="subtitle2"
            text={mapInfo.symbols}
            size={24}
          />

          <CardAvatar
            src={`./images/monster.png`}
            variant="subtitle2"
            text={`(Lv.${monsterLevelValue}) ${monsterNameValue}`}
            size={24}
          />

          <CardAvatar
            src={`./images/exp.png`}
            variant="subtitle2"
            text={monsterExperienceValue}
            size={24}
          />

          <CardAvatar
            src={`./images/meso.png`}
            variant="subtitle2"
            text={monsterMoneyValue}
            size={24}
          />
        </CardContent>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ p: 0, ml: 1, width: 350 }}>
          <CardAvatar
            src={`./images/map_icon/소멸의여로.png`}
            variant="h6"
            text="상세정보 계산기"
            size={35}
          />

          <CardTextFieldWithLabelUI
            label="젠당 잡을 수 있는 마릿수:"
            value={monsterValue}
            onChange={handleMonsterValue}
            maxValue={totalNumberOfMonsters}
          />

          <CardTextFieldWithLabelUI
            label="6분당 내가 잡는 마릿수:"
            value={sixMinutesMonsterValue}
            onChange={handleSixMinutesMonsterValue}
            maxValue={totalNumberOfMonsters * 48}
          />

          <CardValueWithLabelUI
            label="6분당 경험치 획득량:"
            value={expReward}
            unit="경험치"
          />

          <CardValueWithLabelUI
            label="6분당 메소 획득량:"
            value={mesoReward}
            unit="메소"
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardMapDetail;
