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
            </Card>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
