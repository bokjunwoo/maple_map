import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Card,
  CardMedia,
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
            </Card>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
