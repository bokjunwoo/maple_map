import { TableRow, TableCell, Collapse, Box, Typography } from '@mui/material';
import { MapType } from '../../../data/mapTypes';

type MapDetailCollapseUIType = {
  open: boolean;
  mapInfo: MapType;
};

const MapDetailCollapseUI = ({ open, mapInfo }: MapDetailCollapseUIType) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              {mapInfo.monster}
            </Typography>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
