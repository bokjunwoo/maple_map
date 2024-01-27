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
                image="/images/test1.png"
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ p: 0, width: 300 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Avatar
                      src={`./images/map_icon/소멸의여로.png`}
                      variant="rounded"
                      sx={{ p: 0.15 }}
                    />
                    <Typography variant="h6" marginLeft={0.7}>
                      {mapInfo.map_name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Avatar
                      src={`./images/map_icon/소멸의여로.png`}
                      variant="circular"
                      sx={{ p: 0.15, width: 24, height: 24 }}
                    />
                    <Typography variant="subtitle1" marginLeft={0.5}>
                      {mapInfo.symbols}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Avatar
                      src={`./images/map_icon/소멸의여로.png`}
                      variant="circular"
                      sx={{ p: 0.15, width: 24, height: 24 }}
                    />
                    <Typography variant="subtitle2" marginLeft={0.5}>
                      {mapInfo.monster}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Avatar
                      src={`./images/map_icon/소멸의여로.png`}
                      variant="circular"
                      sx={{ p: 0.15, width: 24, height: 24 }}
                    />
                    <Typography variant="subtitle2" marginLeft={0.5}>
                      {mapInfo.monster_experience}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Avatar
                      src={`./images/map_icon/소멸의여로.png`}
                      variant="circular"
                      sx={{ p: 0.15, width: 24, height: 24 }}
                    />
                    <Typography variant="subtitle2" marginLeft={0.5}>
                      {mapInfo.monster_money}
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
