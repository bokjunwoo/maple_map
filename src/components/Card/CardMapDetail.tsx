import { Box, CardMedia, CardContent, Card } from '@mui/material';
import CardAvatar from './CardUI/CardAvatarUI';
import { MapType } from '../../data/mapTypes';
import { ChangeEvent, useState } from 'react';
import CardValueWithLabelUI from './CardUI/CardValueWithLabelUI';
import CardTextFieldWithLabelUI from './CardUI/CardTextFieldWithLabelUI';

type CardMapDetailType = {
  mapInfo: MapType;
};

const CardMapDetail = ({ mapInfo }: CardMapDetailType) => {
  const [monsterValue, setMonsterValue] = useState(mapInfo.number_of_monster);

  const handleMonsterValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMonsterValue(Number(e.target.value));
  };

  const sixMinutesMonsterValue = monsterValue * 48;

  return (
    <Card sx={{ display: 'flex', border: 'none', boxShadow: 'none' }}>
      <CardMedia
        component="img"
        sx={{
          width: 460,
          height: 230,
          objectFit: 'fill',
          borderRadius: '4px',
        }}
        image={`/images/test2.png`}
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
            variant="subtitle1"
            text={mapInfo.symbols}
            size={24}
          />

          <CardAvatar
            src={`./images/monster.png`}
            variant="subtitle2"
            text={mapInfo.monster}
            size={24}
          />

          <CardAvatar
            src={`./images/exp.png`}
            variant="subtitle2"
            text={mapInfo.monster_experience}
            size={24}
          />

          <CardAvatar
            src={`./images/meso.png`}
            variant="subtitle2"
            text={mapInfo.monster_money}
            size={24}
          />
        </CardContent>
      </Box>

      <Box>
        <CardContent sx={{ p: 0, ml: 1 }}>
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
            maxValue={mapInfo.number_of_monster}
          />

          <CardTextFieldWithLabelUI
            label="6분당 내가 잡는 마릿수:"
            value={sixMinutesMonsterValue}
            onChange={handleMonsterValue}
            maxValue={mapInfo.number_of_monster * 48}
          />

          <CardValueWithLabelUI
            label="6분당 경험치 획득량:"
            value={sixMinutesMonsterValue * mapInfo.monster_experience}
          />

          <CardValueWithLabelUI
            label="6분당 메소 획득량:"
            value={sixMinutesMonsterValue * mapInfo.monster_money}
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardMapDetail;
