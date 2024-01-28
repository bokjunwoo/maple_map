import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  TextField,
} from '@mui/material';
import { MapType } from '../../../data/mapTypes';
import CardDetailUI from '../../Card/CardDetailUI';

type MapDetailCollapseUIType = {
  open: boolean;
  mapInfo: MapType;
};

const MapDetailCollapseUI = ({ open, mapInfo }: MapDetailCollapseUIType) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
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
                  <CardDetailUI
                    src={`/images/symbol_icon/${mapInfo.map_key}.png`}
                    variant="subtitle1"
                    text={mapInfo.symbols}
                  />
                  <CardDetailUI
                    src={`./images/monster.png`}
                    variant="subtitle2"
                    text={mapInfo.monster}
                  />
                  <CardDetailUI
                    src={`./images/exp.png`}
                    variant="subtitle2"
                    text={mapInfo.monster_experience}
                  />
                  <CardDetailUI
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

                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}
                  >
                    <Typography variant="subtitle1" marginLeft={0.5}>
                      젠당 잡을 수 있는 마릿수:
                    </Typography>

                    <Box
                      sx={{ display: 'flex', alignItems: 'center' }}
                      marginLeft={1}
                    >
                      <TextField
                        sx={{ width: 40 }}
                        id="outlined-size-small"
                        size="small"
                        defaultValue={0}
                        inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
                      />

                      <Typography variant="subtitle1" marginLeft={0.5}>
                        / {mapInfo.number_of_monster}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}
                  >
                    <Typography variant="subtitle1" marginLeft={0.5}>
                      6분당 내가 잡는 마릿수:
                    </Typography>

                    <Box
                      sx={{ display: 'flex', alignItems: 'center' }}
                      marginLeft={1}
                    >
                      <TextField
                        sx={{ width: 40 }}
                        id="outlined-size-small"
                        size="small"
                        defaultValue={0}
                        inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
                      />

                      <Typography variant="subtitle1" marginLeft={0.5}>
                        / {mapInfo.number_of_monster * 48}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}
                  >
                    <Typography variant="subtitle1" marginLeft={0.5}>
                      6분당 경험치 획득량:{' '}
                      {mapInfo.number_of_monster *
                        48 *
                        mapInfo.monster_experience}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}
                  >
                    <Typography variant="subtitle1" marginLeft={0.5}>
                      6분당 메소 획득량:{' '}
                      {mapInfo.number_of_monster * 48 * mapInfo.monster_money}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
