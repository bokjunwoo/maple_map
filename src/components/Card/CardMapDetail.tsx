import {
  Box,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Card,
  TextField,
} from '@mui/material';
import CardAvatar from './CardUI/CardAvatarUI';
import { MapType } from '../../data/mapTypes';
import { ChangeEvent, useState } from 'react';

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
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar
              src={`./images/map_icon/${mapInfo.map_key}.png`}
              variant="rounded"
              sx={{ p: 0.15 }}
            />
            <Typography variant="h6" marginLeft={0.5}>
              {mapInfo.map_name}
            </Typography>
          </Box>

          <CardAvatar
            src={`/images/symbol_icon/${mapInfo.map_key}.png`}
            variant="subtitle1"
            text={mapInfo.symbols}
          />

          <CardAvatar
            src={`./images/monster.png`}
            variant="subtitle2"
            text={mapInfo.monster}
          />

          <CardAvatar
            src={`./images/exp.png`}
            variant="subtitle2"
            text={mapInfo.monster_experience}
          />

          <CardAvatar
            src={`./images/meso.png`}
            variant="subtitle2"
            text={mapInfo.monster_money}
          />
        </CardContent>
      </Box>

      <Box>
        <CardContent sx={{ p: 0, ml: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar
              src={`./images/map_icon/${'미정'}.png`}
              variant="rounded"
              sx={{ p: 0.15 }}
            />
            <Typography variant="h6" marginLeft={0.5}>
              상세정보 계산기
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
            <Typography variant="subtitle1" marginLeft={0.5}>
              젠당 잡을 수 있는 마릿수:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }} marginLeft={1}>
              <TextField
                sx={{ width: 40 }}
                id="outlined-size-small"
                size="small"
                defaultValue={0}
                value={monsterValue}
                onChange={handleMonsterValue}
                inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
              />

              <Typography variant="subtitle1" marginLeft={0.5}>
                / {mapInfo.number_of_monster}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
            <Typography variant="subtitle1" marginLeft={0.5}>
              6분당 내가 잡는 마릿수:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }} marginLeft={1}>
              <TextField
                sx={{ width: 40 }}
                id="outlined-size-small"
                size="small"
                defaultValue={0}
                value={sixMinutesMonsterValue}
                onChange={handleMonsterValue}
                inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
              />

              <Typography variant="subtitle1" marginLeft={0.5}>
                / {mapInfo.number_of_monster * 48}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
            <Typography variant="subtitle1" marginLeft={0.5}>
              6분당 경험치 획득량:{' '}
              {sixMinutesMonsterValue * mapInfo.monster_experience}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
            <Typography variant="subtitle1" marginLeft={0.5}>
              6분당 메소 획득량:{' '}
              {sixMinutesMonsterValue * mapInfo.monster_money}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardMapDetail;
