import { TableRow, TableCell, Collapse, Box } from '@mui/material';
import { MapType } from '../../data/mapTypes';
import CardMapDetail from '../Card/CardMapDetail';

type TableCollapseType = {
  open: boolean;
  mapInfo: MapType;
};

const TableCollapse = ({ open, mapInfo }: TableCollapseType) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <CardMapDetail mapInfo={mapInfo} />
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default TableCollapse;
